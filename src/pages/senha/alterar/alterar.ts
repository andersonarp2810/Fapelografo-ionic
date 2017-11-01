import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Tostador } from '../../../providers/tostador';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the Alterar page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-alterar',
  templateUrl: 'alterar.html',
  providers: [Tostador],
})
export class Alterar {

  antiga: string;
  botaotxt: string;
  botaovale: boolean;
  confirma: string;
  nova: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tostador: Tostador) {
  }

  enviar() {
    console.log(this.form);
    setTimeout(() => {
      this.tostador.tostar(this.antiga + this.nova, 500);
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Alterar');
  }

  form = new FormGroup({
    antiga: new FormControl('', Validators.minLength(2)),
    nova: new FormControl('', Validators.minLength(2)),
    confirma: new FormControl('', Validators.minLength(2)),
  }, this.passwordMatchValidator);

  passwordMatchValidator(g: FormGroup) {
    return g.get('nova').value === g.get('confirma').value
      ? {} : { 'mismatch': true };
  }

}
