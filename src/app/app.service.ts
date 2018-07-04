import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {config} from "../config";
import { HttpClient } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';


@Injectable()
export class AppService {
  private apiUrlBlockChain = config.HOST_BLOCK_CHAIN +'/mineBlock';
  private apiUrl = config.HOST +'/ns/notificar?notificacao=bhAddCart';
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});

  constructor(public http: HttpClient,private httpc: Http) {
  }

  bhAddCart(): Observable<any> {
      return this.http.get(this.apiUrl);
  }

  getProduct(id: any): Observable<any> {
      return this.http.get(this.apiUrl + '/' + id);
  }

  genBlock(dados: any): Observable<any> {
    return this.http.post(this.apiUrlBlockChain,
        dados).map((response: Response) => {
        return response;
    }).catch((e) => { throw e; });
  }
}
