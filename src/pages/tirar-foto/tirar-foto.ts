import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the TirarFotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tirar-foto',
  templateUrl: 'tirar-foto.html',
})
export class TirarFotoPage {
  photo: string = '';
  gerarDocumento: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  takePicture() {
    
    this.photo = '';
 
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false
      // targetWidth: 1000,
      // targetHeight: 1000
    }
 
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;
 
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })

    this.gerarDocumento = true;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TirarFotoPage');
  }

  goDetailsDocumento() {
    this.navCtrl.push('DetailsDocumentoPage');
  }

  goDocumento() {
    this.navCtrl.push('GerarDocumentoPage');
  }

}
