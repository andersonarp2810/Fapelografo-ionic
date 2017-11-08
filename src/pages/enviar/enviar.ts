import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the Enviar page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-enviar',
  templateUrl: 'enviar.html',
})
export class Enviar {

  disciplina: string;
  mensagem: string;

  form = new FormGroup({
    disciplina: new FormControl('', Validators.required),
    mensagem: new FormControl('', Validators.required)
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerter: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Enviar');
  }

  alertar(){
    let alerta = this.alerter.create({
      title: 'Enviar aviso?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: ()=>{
            console.log("enviado");
          }
        }
      ]
    });

    alerta.present();
  }

  enviar() {
    console.log(this.form);
    this.alertar();
  }

  disciplinaChange(event) {
    console.log(event);
  }

  tipoChange(event) {
    console.log(event);
  }

}
