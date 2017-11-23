import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
  }

  enviarAviso(session: string, userId: number, titulo: string, descricao: string, tipo: string, categoria: number, cursos: number[], disciplinas: number[]) {
    return this.http.post(
      "https://fapelografo.herokuapp.com/appfapelografo/mobile/send_mensagem/",
      JSON.stringify({
        session: session,
        user_id: userId,
        titulo: titulo,
        descricao: descricao,
        tipo: tipo,
        categoria: categoria,
        cursos: cursos,
        disciplinas: disciplinas
      })
    );
  }

  login(login: string, password: string, session: string) {
    return this.http.post(
      "https://fapelografo.herokuapp.com/appfapelografo/mobile/login/",
      JSON.stringify({
        login: login,
        password: password,
        session: session
      })
    );
  }

  logout(session: string) {
    return this.http.post(
      "https://fapelografo.herokuapp.com/appfapelografo/mobile/logout/",
      JSON.stringify({
        session: session
      })
    );
  }

  getAvisos(disciplinaIds: number[], cursoIds: number[]) {
    return this.http.post(
      this.caminho,
      JSON.stringify({
        acao: "get_avisos",
        curso_ids: cursoIds,
        disciplina_ids: disciplinaIds
      })
    );
  }

  getInformation() {
    return this.http.post(
      this.caminho,
      JSON.stringify({
        acao: 'get_information'
      }));
  }

}
