import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsDocumentoPage } from './details-documento';

@NgModule({
  declarations: [
    DetailsDocumentoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsDocumentoPage),
  ],
})
export class DetailsDocumentoPageModule {}
