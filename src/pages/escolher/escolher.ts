import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service';
/**
 * Generated class for the Escolher page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-escolher',
  templateUrl: 'escolher.html',
  providers: [
    DataServiceProvider,
  ]
})
export class Escolher {

  op1: boolean = true;
  op2: boolean = false;
  op3: boolean = false;

  information: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider) {

    this.dataService.getMenus()
      .subscribe((response) => {
        console.log(response);
        this.information = response.items;
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Escolher');
  }


  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

}
