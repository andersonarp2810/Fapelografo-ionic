import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "Escolher";

  pages: Array<{ title: string, component: string }>;
  login: Array<{ title: string, component: string }>;
  prof: Array<{ title: string, component: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu: MenuController) {
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
    ]
    this.prof = [
      { title: 'Área do Professor', component: "AreaProfessor" },
      { title: 'Enviar aviso', component: "Enviar" },
      { title: 'Alterar senha', component: "Alterar" }
    ];

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
    this.nav.setRoot("Login");
    this.menu.enable(true, 'unauthenticated');
    this.menu.enable(false, 'authenticated');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
