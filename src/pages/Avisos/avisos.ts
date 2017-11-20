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
  information: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dados: DataServiceProvider) {

    this.dados.getInformation()
      .subscribe(
      (response) => {
        let data = response.json();
        this.information = data;
      }
      );

    this.dados.getAvisos([], [])
      .subscribe(
      (response) => {
        let data = response.json();
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
