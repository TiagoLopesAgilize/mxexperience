import { AppService } from './../../../src/app/app.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[AppService]
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public appSrvc: AppService) {

  }

  public adicionarCarrinho() {

    this.appSrvc.bhAddCart().subscribe((data) => {
      console.log('aqui');
    });

    return true;
  }

  public genBlock() {
    let dados = {"data" : "Tiago Lopes, 82316201504, 05/07/2018, 14:99"};
    this.appSrvc.genBlock(dados).subscribe((data) => {
      console.log('aqui');
    });

    return true;
  }

}

