import { Component, OnInit } from '@angular/core';

import { ModelService } from "../../services/model.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  coleccion="usuario";

  doc={id:'',data:{roll:"Service Customer",rollEmpresa:"FMS",estatus:"Activo"}};
  isUpdate=false; 

  constructor(
    public model: ModelService) {}

  ngOnInit() {
    //console.log("init")
    if (this.model.entity[this.coleccion]) {
      this.isUpdate=true;
      this.doc=this.model.entity[this.coleccion];
    }
    this.model.consultarPor("roll",this.doc.data.rollEmpresa)
  }

}
