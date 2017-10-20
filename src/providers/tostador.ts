import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the Tostador provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Tostador {

  constructor(public toastCtrl: ToastController) {
    console.log('Hello Tostador Provider');
  }

  tostar(mensagem: string, tempo: number) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: tempo
    });
    toast.present();
  }

}
