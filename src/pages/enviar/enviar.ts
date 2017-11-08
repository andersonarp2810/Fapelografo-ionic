import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
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
  tipo: string;

  form = new FormGroup({
    disciplina: new FormControl('', Validators.required),
    mensagem: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required)
  });

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Enviar');
  }


  disciplinaChange(event) {
    console.log(event);
  }

  tipoChange(event) {
    console.log(event);
  }

}
