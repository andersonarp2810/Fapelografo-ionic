import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service';

/**
 * Generated class for the Pesquisa page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})
export class Pesquisa {

  escolha: string;
  categorias: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider) {

    this.dataService.getCategorias()
      .subscribe((response) => {
        console.log(response);
        this.categorias = response.items;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pesquisa');
  }

  filtrar() {
    console.log(this.escolha);
    this.navCtrl.setRoot('Avisos', this.escolha);
  }


  toggleSection(i) {
    this.categorias[i].open = !this.categorias[i].open;
  }
}
