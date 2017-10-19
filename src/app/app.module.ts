import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Enviar } from '../pages/enviar/enviar';
import { Escolher } from '../pages/escolher/escolher';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { Manual } from '../pages/manual/manual';
import { Politica } from '../pages/politica/politica';
import { Alterar } from '../pages/senha/alterar/alterar';
import { Recuperar } from '../pages/senha/recuperar/recuperar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Enviar,
    Escolher,
    HomePage,
    ListPage,
    Login,
    Manual,
    Politica,
    Alterar,
    Recuperar
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
