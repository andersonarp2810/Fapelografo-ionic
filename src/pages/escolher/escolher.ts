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

  pages: any;
  showLevel1 = null;
  showLevel2 = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider) {

    this.dataService.getMenus()
      .subscribe((response) => {
        this.pages = response;
        console.log(this.pages);
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Escolher');
  }

  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };

  toggleLevel2(idx) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
    }
  };

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };

  isLevel2Shown(idx) {
    return this.showLevel2 === idx;
  };

}
