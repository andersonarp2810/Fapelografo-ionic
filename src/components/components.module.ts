import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BotaoMenu } from './botao-menu/botao-menu';
@NgModule({
	declarations: [
		BotaoMenu,
	],
	imports: [
		IonicModule
	],
	exports: [
		BotaoMenu,
	]
})
export class ComponentsModule { }
