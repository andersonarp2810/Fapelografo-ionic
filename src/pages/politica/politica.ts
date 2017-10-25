import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the Politica page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-politica',
  templateUrl: 'politica.html',
})
export class Politica {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Politica');
  }

}
