import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../app/app.service';

/**
 * Generated class for the SegurosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-seguros',
  templateUrl: 'seguros.html',
  providers:[AppService]
})
export class SegurosPage {
  nome: string;
  cpf: string;
  dataNasc: string;
  endereco: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appSrvc: AppService) {
  }

  ionViewDidLoad() {
  }


  public genBlock() {
    const objBlock = `"${this.nome}, ${this.cpf}, 05/07/2018, 18:15"`;

    this.appSrvc.genBlock({"data" : objBlock}).subscribe((data) => {
      console.log('aqui');
    });

    return true;
  }

}
