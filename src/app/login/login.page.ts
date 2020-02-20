import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams, AlertController, MenuController } from '@ionic/angular';

import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isUpdate=false; 
  createSuccess = false;
  forma = {id:'' };
  usuario = {id:'', correo: '', pass: '', estatus:''};

  constructor(
    private router: Router,
    private alertController:AlertController,
    private firebaseService:FirebaseService,
    public menuCtrl: MenuController) { }

  ngOnInit() {
    console.log('OnInit');
    this.menuCtrl.enable(false);
    this.firebaseService.logoutUser();
  }

  public login() {
    var usuarios:any =[];
    this.firebaseService.loginUser(this.usuario.correo,this.usuario.pass).then(snap=>{
    this.firebaseService.findColeccion("usuarios",'correo','==',this.usuario.correo).then(
      snap =>{usuarios = snap;
        console.info('FrmUsuarios',usuarios[0], this.usuario);
        if (usuarios.length==1 && this.usuario.pass === usuarios[0].pass && usuarios[0].estatus=="Activo")
         {
          this.usuario=usuarios[0];
          this.usuario["token"]=this.firebaseService.modelo["token"] ? this.firebaseService.modelo["token"] : "token";
          this.firebaseService["usuario"]=this.usuario;
          this.firebaseService.updateDocument("usuarios",this.usuario.id, this.usuario);
          if (this.firebaseService["start"]) {
            this.router.navigate([this.firebaseService["start"]]);
            this.firebaseService["start"]=null;
          } else {
            this.router.navigate(['/casos']);
          }
          this.usuario = {id:'', correo: '', pass: '', estatus:''};
          this.menuCtrl.enable(true);
        } else {
          this.presentAlert("Usuario no autorizado");
        }
      }
    );
    });     
  }

  enviarEmail(){
    if (this.usuario.correo) {
      let mensaje={
        user: this.usuario.correo,
        pass: this.usuario.pass,
        from: "Obervador Ciudadano",   
        dest: "ricardo.romero@people-media.com.mx",
        tema: "Restablecer acceso",
        body: "Solicitud de clave de acceso"
      }
      this.firebaseService.sendEmail(mensaje);
      this.presentAlert("El administrador le contactará, gracias!");
    } else {
      this.presentAlert("Favor de proporcionar su correo");
    }

  } 

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Seguridad',
      subHeader: 'Alerta',
      "message": message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
