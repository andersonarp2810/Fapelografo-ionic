import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the Detalhes page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class Detalhes {

  aviso: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.aviso = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detalhes');
  }

}
