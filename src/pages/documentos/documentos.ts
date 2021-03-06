import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DocumentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html',
})
export class DocumentosPage {

  identidades: string = "segment1";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.identidades = "segment1";
  }

  ionViewDidLoad() {
  }

  goToDocumento() {
    this.navCtrl.push('DetailsDocumentoPage');
  }

}
