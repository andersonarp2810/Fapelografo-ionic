import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { Detalhes } from '../pages/detalhes/detalhes';
import { Escolher } from '../pages/escolher/escolher';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Manual } from '../pages/manual/manual';
import { Pesquisa } from '../pages/pesquisa/pesquisa';
import { Politica } from '../pages/politica/politica';

import { Alterar } from '../pages/senha/alterar/alterar';
import { AreaProfessor } from '../pages/area-professor/area-professor';
import { Enviar } from '../pages/enviar/enviar';
import { Login } from '../pages/login/login';
import { Recuperar } from '../pages/senha/recuperar/recuperar';

import { BotaoMenu} from '../components/botao-menu/botao-menu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,

    Detalhes,
    Escolher,
    HomePage,
    ListPage,
    Manual,
    Pesquisa,
    Politica,

    Alterar,
    AreaProfessor,
    Enviar,
    Login,
    Recuperar,

    BotaoMenu
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    Detalhes,
    Escolher,
    HomePage,
    ListPage,
    Manual,
    Pesquisa,
    Politica,

    Alterar,
    AreaProfessor,
    Enviar,
    Login,
    Recuperar,

    BotaoMenu
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
