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

  constructor(public http: Http) {
    console.log('Hello DataServiceProvider Provider');
  }

  getDisciplinas() {
    return this.http.get('assets/data/disciplinas.json')
      .map((response: Response) => response.json());
  }

  getAvisos() {
    return this.http.get('assets/data/avisos.json')
      .map((response: Response) => response.json());
  }

}
