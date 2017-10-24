import { Component, Input } from '@angular/core';

/**
 * Generated class for the BotaoMenu directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Component({
  selector: 'botao-menu',
  templateUrl: 'botao-menu.html'
})
export class BotaoMenu {


  @Input() titulo: string;

}
