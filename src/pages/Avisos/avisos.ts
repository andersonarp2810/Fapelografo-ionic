import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service';

@IonicPage()

@Component({
  selector: 'page-avisos',
  templateUrl: 'avisos.html',
  providers: [
    DataServiceProvider
  ]
})
export class Avisos {

  avisos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dados: DataServiceProvider) {
    
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

    console.log(navParams);
  }



}
