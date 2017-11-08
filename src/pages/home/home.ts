import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    DataServiceProvider
  ]
})
export class HomePage {

  avisos: any;

  constructor(public navCtrl: NavController, public dados: DataServiceProvider) {
    this.dados.getAvisos()
      .subscribe(
      (data) => {
        this.avisos = data;
        console.log(this.avisos);
      },
      (erro) => {
        console.error(erro);
      },
      () => {
        console.log("completo");
      }
      );
  }



}
