import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  caminho = "https://fapelografo.herokuapp.com/appfapelografo/mobile/get/";

  constructor(public http: Http) {
    console.log('Hello DataServiceProvider Provider');
  }

  getAvisos() {
    return this.http.get('assets/data/avisos.json')
      .map((response: Response) => response.json());
  }

  getCategorias() {
    return this.http.get('assets/data/categorias.json')
      .map((response: Response) => response.json());
  }

  getInformation() {
    return this.http.post(
      this.caminho,
      JSON.stringify({
        acao: 'get_information'
      }))
      .map((response: Response) => response.json());
  }

}
