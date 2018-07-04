import { config } from './../../../src/config';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
* Generated class for the BlockchainPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@Component({
    selector: 'page-blockchain',
    templateUrl: 'blockchain.html',
})
export class BlockchainPage {

    public websocket;
    public txNodes: any[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.init();
    }

    public init() {

        //websocket = new WebSocket("wss://ws.blockchain.info/inv");
       // this.websocket = new WebSocket("ws://45.55.144.89:6001");
       this.websocket = new WebSocket(config.HOST_BLOCK_CHAIN_PAIR);
        this.websocket.onopen = function() {
            document.getElementById("status").innerHTML = "Connected";
        };

        this.websocket.onerror = function(event) {
            document.getElementById("status").innerHTML = "Error";
        };

        /** websocket.onmessage = function(event) {
            //message processing code goes here
            var msgData = JSON.parse(event.data);
            if (msgData.op == 'utx') {
                var txHash = msgData.x.hash;
                var outputs = msgData.x.out;
                var totalTxValue = 0;
                for (var j = 0; j < outputs.length; j++) {
                    var output = outputs[j];
                    totalTxValue += output.value;
                }
                totalTxValue /= 100000000;
                var newTx = {
                    id: txHash,
                    value: totalTxValue,
                    scaledValue: 5 + Math.log(totalTxValue)
                };
                txNodes.push(newTx);
                if (txNodes.length > 400) {
                    txNodes.shift();
                }
                bubblesRestart();

                document.getElementById("status").innerHTML = "tx: " + txHash;

            }
        };**/

        this.websocket.onmessage = function(event) {
            //message processing code goes here
            let msgData = JSON.parse(event.data);
            //let milliseconds = new Date().valueOf();

            // draw(true);
            if (msgData.type == 2) {

                let txHash = JSON.parse(msgData.data)[0].hash;

                let outputs = [{
                    "spent": false,
                    "tx_index": 356631360,
                    "type": 0,
                    "addr": "1EBqdtguYQddH848zc97Sktvw6yZ8T7hsw",
                    "value": 166515,
                    "n": 0,
                    "script": "76a91490a664e66b0e9ecb963baaffa9c916f087e3f3a888ac"
                }, {
                    "spent": false,
                    "tx_index": 356631360,
                    "type": 0,
                    "addr": "1NRPFgL79D8GFw2UJ7wx9GHzb5DxRMBzRW",
                    "value": 19167997,
                    "n": 1,
                    "script": "76a914eaf7335202594d8496f4e4a9a5201a0ee4263fe988ac"
                }];
                let totalTxValue = 0;
                for (let j = 0; j < outputs.length; j++) {
                    let output = outputs[j];
                    totalTxValue += output.value;
                }
                totalTxValue /= 100000000;
                let newTx = {
                    id: txHash,
                    value: totalTxValue,
                    scaledValue: 5 + Math.log(totalTxValue)
                };

                this.txNodes = [];

                this.txNodes.push(newTx);
                if (this.txNodes.length > 400) {
                    this.txNodes.shift();
                }

                this.createBlock(JSON.parse(msgData.data));

            }
        }.bind(this);

    }

    contBlck = 0;

    public createBlock(data: any){

        var node = document.createElement("div"); // Create a <li> node

        this.contBlck++;

        if (this.contBlck >= 5) {
            this.contBlck = 0;
            this.contBlck++
        }

        let txHash = data[0].hash;
        let previousHash = data[0].previousHash;
        let info = data[0].data.split(",");
        let name = info[0];
        let cpf = info[1].substring(0,4).concat(".").concat(info[1].substring(4,7)).concat(".").concat(info[1].substring(7,10)).concat("-").concat(info[1].substring(10,12))
        let index = data[0].index;
        let dataBloco = info[2];

        node.innerHTML = `
        <div class="item">
        <div class="cube block${this.contBlck}">
        <div class="info">

        </div>
        <div class="number">${index}
        </div>

        <div class="color-cube">
        </div>

        <div class="triangle-up">
        </div>

        <div class="cube-icon">
        </div>

        <div class="triangle-down">
        </div>
        <div class="hash">
        <h2>
        <span>Hash:</span>${txHash}
        </h2>

        <h2>
        <span>Hash previous:</span>${previousHash}
        </h2>
        </div>
        </div>
        <div class="info">
        <img src="assets/imgs/user.jpg" class="img-user">
        <h3><span>Nome: </span>${name}</h3>
        <h3><span>CPF: </span>${cpf}</h3>
        <h3><span>Data: </span>${dataBloco}</h3>
        </div>
        </div>
        `;
        document.getElementById("myList").appendChild(node);

    }

    sendMessage(message) {
        document.getElementById("output").innerHTML = message;
        this.websocket.send(message);
    }

    start() {
        this.websocket.send('{"op":"unconfirmed_sub"}');
        console.log("Oi");
    }

    stop() {
        this.websocket.send('{"op":"unconfirmed_unsub"}');
    }


    ionViewDidLoad() {

    }

}
