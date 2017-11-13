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

    this.dataService.getDisciplinas()
      .subscribe((response) => {
        response.items.map((item) => {
          item['check'] = false;
          item.children.map((child) => {
            child['check'] = false;
            return child;
          });
          return item;
        });
        console.log(response);
        this.information = response.items;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Escolher');
  }

  check(item) {
    console.log(item);
    item.children.map((child) => {
      child.check = item.check;
      return child;
    });
  }

  checkChild(item, child) {
    console.log(child);
    let todos = true;
    for (let i = 0; i < item.children.length; i++) {
      if (!item.children[i].check) {
        todos = false;
        break;
      }
    }
    item.check = todos;
  }


  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

}
