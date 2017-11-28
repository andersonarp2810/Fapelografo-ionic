import { Component, ViewChild } from '@angular/core';
import { AlertController, LoadingController, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { DataServiceProvider } from '../providers/data-service';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "Escolher";

  pages: Array<{ title: string, component: string }>;
  login: Array<{ title: string, component: string }>;
  prof: Array<{ title: string, component: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu: MenuController, public loading: LoadingController, private alerter: AlertController, private storage: Storage, private dataService: DataServiceProvider) {
    this.initializeApp();
    this.menu.enable(false, 'unauthenticated');
    this.menu.enable(false, 'authenticated');
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Avisos', component: "Avisos" },
      { title: 'Escolher Disciplinas', component: "Escolher" },
      { title: 'Pesquisa e Filtros', component: "Pesquisa" },
      { title: 'Manual de Usuário', component: "Manual" },
      { title: 'Política de Uso', component: "Politica" }
    ];
    this.login = [
      { title: 'Login', component: "Login" },
      { title: 'Esqueci minha senha', component: "Recuperar" }
    ];
    this.prof = [
      { title: 'Área do Professor', component: "AreaProfessor" },
      { title: 'Enviar aviso', component: "Enviar" },
      { title: 'Alterar senha', component: "Alterar" }
    ];

    this.storage.get('escolhas')
      .then(
      (dados) => {
        console.log(dados);
        if (dados != null) {
          console.log("Nao é primeira vez");
          this.nav.setRoot('Avisos');
        }
      },
      (erro) => {
        console.error(erro);
      }
      );

  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  logout() {
    let load = this.loading.create({
      content: 'Saindo...'
    });
    load.present();

    this.storage.get('sessao')
      .then(
      (dados) => {
        console.log(dados);
        this.dataService.logout(dados.session)
          .subscribe(
          (dados) => {
            console.log(dados);
            this.nav.setRoot("Login");
            this.menu.enable(true, 'unauthenticated');
            this.menu.enable(false, 'authenticated');
            this.storage.remove('sessao');
          },
          (erro) => {
            console.error(erro);
            let alerta = this.alerter.create({
              message: 'Erro de conexão'
            });
            alerta.present();
          },
          () => {
            load.dismiss();
          }
          );
      },
      (erro) => {
        console.error(erro);

      }
      );

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
