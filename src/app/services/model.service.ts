import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { FirebaseService } from "../services/firebase.service";

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  public entity:any={};
  public entitySet:any=[];
  public entityMap:any={};

  constructor(
    private firebaseService: FirebaseService,
    private alertController: AlertController) {}

  public guardar(coleccion,doc) {
    this.firebaseService.addDocument(coleccion, doc); 
    this.presentAlert("Documento guardado exitosamente!");
  }

  public actualizar(coleccion,doc) {
    this.firebaseService.updateDocument(coleccion, doc );
    this.presentAlert("Documento actualizado exitosamente!");
  }

  public borrar(_this, coleccion, doc) {
    _this.firebaseService.deleteDocument(coleccion, doc);
    _this.presentAlert("Documento borrado exitosamente!");
  }

  public consultar(coleccion) {
    this.firebaseService.consultar(this.entitySet, coleccion)
  }

  public consultarPor(coleccion,filtro) {
    this.firebaseService.consultarPor(this.entitySet, coleccion,"rollEmpresa","==",filtro)
  }

  public confirmarBorrar(coleccion, doc) {
    let params={coleccion:coleccion, doc:doc, callback:this.borrar, _this:this}
    this.presentAlertConfirm("Desea borrar el documento?", params)
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Exito!',
      subHeader: 'En actualización',
      "message": message,
      buttons: ['OK']
    });
    await alert.present();
  }
  
  async presentAlertConfirm(message:string, params:any) {
    const alert = await this.alertController.create({
      header: 'Confirmación!',
      message: message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            params.callback(params._this, params.coleccion, params.doc);
          }
        }
      ]
    });
    await alert.present();
  }
  
}
