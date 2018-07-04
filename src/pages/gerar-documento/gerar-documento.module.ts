import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GerarDocumentoPage } from './gerar-documento';

@NgModule({
  declarations: [
    GerarDocumentoPage,
  ],
  imports: [
    IonicPageModule.forChild(GerarDocumentoPage),
  ],
})
export class GerarDocumentoPageModule {}
