import { Component } from '@angular/core';
import { MenuController, NavController, NavParams, IonicPage } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider, private storage: Storage, private menu: MenuController) {

    this.storage.get('escolhas')
      .then((dados) => {
        console.log("dados");
        console.log(dados);
        if (dados == null) {
          console.log('nao tem dados');
          //this.menu.enable(false, 'unauthenticated');
          //this.menu.enable(true, 'unauthenticated'); // pra pegar por enquanto
        } else {
          console.log('tem dados');
          this.menu.enable(true, 'unauthenticated');
        }
      },
      (erro) => {
        console.error(erro);
      });

    this.dataService.getCategorias()
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

  salvar() {
    let escolhas: any;
    //this.storage.set('escolhas', this.escolhas);
    console.log(this.storage.driver + ' ' + escolhas);
    this.navCtrl.setRoot('Avisos');
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

}
