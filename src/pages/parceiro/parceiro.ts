import { AppService } from './../../app/app.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as io from '../../assets/js/socket.io';
import {config} from "../../config";

@Component({
  selector: 'page-parceiro',
  templateUrl: 'parceiro.html',
  providers:[AppService]
})
export class ParceiroPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  clienteLogado: any;
  sumBehaviorAddCart: number = 0;
  flagShowNewImage = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public appSrvc: AppService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    let socket = io(config.WSS, {
      transports: ['websocket', 'polling', 'flashsocket'],
      'reconnection': true,
      'reconnectionDelay': 1000,
      'reconnectionDelayMax': 5000,
      'forceNew': true
  });
  socket.on('notificacao', (data) => {

      var cliente = localStorage.getItem("cliente"); // Recupera os dados armazenados
      this.clienteLogado = JSON.parse(cliente); // Converte string para objeto

      //	<li class="perito" title="Perito de Produtos" style="visibility:hidden;">1</li>
      //<li class="critico" title="Crítico de Sucesso" style="visibility:hidden;">2</li>
      //	<li class="semeador" title="Semeador de Produtos" style="visibility:hidden;">3</li>
      //	<li class="comprador" title="Comprador Premium" style="visibility:hidden;">4</li>


      if (data.split(";")[0] == "bhAddReview") {

         let comentprod = document.getElementById('comentprod');
          if (document.getElementById('comentprodreview')) {
              if (comentprod) {
                  comentprod.removeChild(document.getElementById('comentprodreview'));
              }
          }

          if (document.getElementById('comentprodbadge')) {
              document.getElementById('comentprodbadge').style.visibility = "";
          }

          document.getElementById('textReview').textContent = data.split(";")[1];


          if (this.clienteLogado.sumBehaviorAddCart >= 1) {

              this.addBadgeList('Comprador Premium', 'comprador');

          }

          if (this.clienteLogado.sumBehaviorAddReview >= 1) {

            this.addBadgeList('Perito de Produtos', 'perito');

          }


          if (this.clienteLogado.sumBehaviorAddReview >= 1) {
            this.addBadgeList('Semeador de Produtos', 'semeador');

          }

          if (this.clienteLogado.sumBehaviorViewMovieSocial >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'semeador');

          }

          if (this.clienteLogado.sumBehaviorCompSocial >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'semeador');

          }

      } else if (data.split(";")[0] == "bhAddCart") {

          this.flagShowNewImage = false;
          let comentprod = document.getElementById('comentprod');
          if (document.getElementById('comentprodreview')) {
              if (comentprod) {
                  comentprod.removeChild(document.getElementById('comentprodreview'));
              }
          }

          if (document.getElementById('comentprodbadge')) {
              document.getElementById('comentprodbadge').style.visibility = "";
          }

          if (this.clienteLogado.sumBehaviorAddCart >= 1) {

            this.addBadgeList('Comprador Premium', 'comprador');

          }

          if (this.clienteLogado.sumBehaviorViewMovie >= 1) {

            this.addBadgeList('Perito de Produtos', 'perito');

          }

          if (this.clienteLogado.sumBehaviorAddReview >= 2) {

            this.addBadgeList('Semeador de Produtos', 'critico');


          }

          if (this.clienteLogado.sumBehaviorViewMovieSocial >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'semeador');

          }

          if (this.clienteLogado.sumBehaviorCompSocial >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'semeador');

          }

      } else if (data.split(";")[0] == "bhAddViewMoview") {

          let comentprod = document.getElementById('comentprod');
          if (document.getElementById('comentprodreview')) {
              if (comentprod) {
                  comentprod.removeChild(document.getElementById('comentprodreview'));
              }
          }

          if (document.getElementById('comentprodbadge')) {
              document.getElementById('comentprodbadge').style.visibility = "";
          }

          if (this.clienteLogado.sumBehaviorAddCart >= 1) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Comprador Premium', 'comprador');

          }

          if (this.clienteLogado.sumBehaviorViewMovie >= 1) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Perito de Produtos', 'perito');

          }

          if (this.clienteLogado.sumBehaviorAddReview >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'critico');

          }

          if (this.clienteLogado.sumBehaviorViewMovieSocial >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'semeador');

          }

          if (this.clienteLogado.sumBehaviorCompSocial >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'semeador');

          }



      } else if (data.split(";")[0] == "bhAddViewMoviewSocial") {

          let comentprod = document.getElementById('comentprod');
          if (document.getElementById('comentprodreview')) {
              if (comentprod) {
                  comentprod.removeChild(document.getElementById('comentprodreview'));
              }
          }

          if (document.getElementById('comentprodbadge')) {
              document.getElementById('comentprodbadge').style.visibility = "";
          }

          if (this.clienteLogado.sumBehaviorAddCart >= 1) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Comprador Premium', 'comprador');

          }

          if (this.clienteLogado.sumBehaviorViewMovie >= 1) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Perito de Produtos', 'perito');

          }

          if (this.clienteLogado.sumBehaviorAddReview >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'critico');

          }

          if (this.clienteLogado.sumBehaviorViewMovieSocial >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'semeador');

          }

          if (this.clienteLogado.sumBehaviorCompSocial >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'semeador');

          }



      } else if (data.split(";")[0] == "bhAddCompSocial") {

          let comentprod = document.getElementById('comentprod');
          if (document.getElementById('comentprodreview')) {
              if (comentprod) {
                  comentprod.removeChild(document.getElementById('comentprodreview'));
              }
          }

          if (document.getElementById('comentprodbadge')) {
              document.getElementById('comentprodbadge').style.visibility = "";
          }

          if (this.clienteLogado.sumBehaviorAddCart >= 1) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Comprador Premium', 'comprador');

          }

          if (this.clienteLogado.sumBehaviorViewMovie >= 1) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Perito de Produtos', 'perito');

          }

          if (this.clienteLogado.sumBehaviorAddReview >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'critico');

          }

          if (this.clienteLogado.sumBehaviorViewMovieSocial >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'semeador');

          }

          if (this.clienteLogado.sumBehaviorCompSocial >= 2) {
              // document.getElementById('critico').style.visibility = "";
              this.addBadgeList('Semeador de Produtos', 'semeador');

          }



      }
  });//fim socket ws

  let cliente = localStorage.getItem("cliente"); // Recupera os dados armazenados
   this.clienteLogado = JSON.parse(cliente); // Converte string para objeto
  if (this.clienteLogado == "null" || this.clienteLogado == null) { // Caso não haja conteúdo, iniciamos um objeto vazio
      this.clienteLogado = {
          sumBehaviorAddCart: 0,
          sumBehaviorViewMovie: 0,
          sumBehaviorAddReview: 0,
          sumBehaviorCompSocial: 0,
          sumBehaviorViewMovieSocial: 0
      };
      localStorage.setItem("cliente", JSON.stringify(this.clienteLogado));
  }

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ParceiroPage, {
      item: item
    });
  }



    public addBadgeList(titleBd, classNameBd) {
      /*  divBadgeComment = document.getElementById('uiBadgesList');
        liPerito = document.createElement("li");
        liPerito.title = titleBd;
        liPerito.className = classNameBd;
        divBadgeComment.appendChild(liPerito);*/
    }

    public adicionarCarrinho() {
        this.clienteLogado.sumBehaviorAddCart += 1;

        localStorage.setItem("cliente", JSON.stringify(this.clienteLogado));
        console.log("Comportamento add carinho adicionado [ " + this.clienteLogado.sumBehaviorAddCart + ' ]');

        this.appSrvc.bhAddCart();

        return true;
    }

    public adicionarReview() {
        this.clienteLogado.sumBehaviorAddReview += 1;
        localStorage.setItem("cliente", JSON.stringify(this.clienteLogado));


          //  "http://192.168.2.146/ns/notificar?notificacao=bhAddReview;" + $("#comentario").val()
          this.appSrvc.bhAddCart();


        return true;
    }

    public Adicionar() {
        var cliente = JSON.stringify({
            Codigo: 1,
            Nome: 'Tiago Lopes',
            sumBehaviorAddCart: this.sumBehaviorAddCart
        });

        localStorage.setItem("cliente", JSON.stringify(cliente));
        console.log("Registro adicionado.");
        return true;
    }

}
