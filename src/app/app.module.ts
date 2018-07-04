import {HttpModule} from '@angular/http';
import {HttpClientModule} from "@angular/common/http";

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ParceiroPage } from '../pages/parceiro/parceiro';
import { HomePage } from '../pages/home/home';
import { BlockchainPage } from '../pages/blockchain/blockchain';
import { SegurosPage } from '../pages/seguros/seguros';
import { TirarFotoPage } from '../pages/tirar-foto/tirar-foto';

import { Camera } from '@ionic-native/camera'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ParceiroPage,
    BlockchainPage,
    SegurosPage,
    TirarFotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ParceiroPage,
    BlockchainPage,
    SegurosPage,
    TirarFotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
