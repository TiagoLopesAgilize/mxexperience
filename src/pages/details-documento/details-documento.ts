import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../app/app.service';

/**
 * Generated class for the DetailsDocumentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-documento',
  templateUrl: 'details-documento.html',
  providers:[AppService]
})
export class DetailsDocumentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appSrvc: AppService) {
  }

  ionViewDidLoad() {
  }

  public genBlock() {

    this.appSrvc.genBlock({"data" : "Tiago Lopes, 82316201504, 05/07/2018, 10:35"}).subscribe((data) => {
      console.log(data);
    });

    return true;
  }

}
