import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";

  pages: Array<{ title: string, component: string }>;
  prof: Array<{ title: string, component: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: "HomePage" },
      { title: 'Escolher Disciplinas', component: "Escolher" },
      { title: 'Pesquisa e Filtros', component: "Pesquisa" },
      { title: 'Área do Professor', component: "AreaProfessor" },
      { title: 'Manual de Usuário', component: "Manual" },
      { title: 'Política de Uso', component: "Politica" }
    ];
    this.prof = [
      { title: 'Enviar aviso', component: "Enviar" },
      { title: 'Alterar senha', component: "Alterar" },
      { title: 'Esqueci minha senha', component: "Recuperar" },
      { title: 'Login', component: "Login" }
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

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
