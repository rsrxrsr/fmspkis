import { Component, OnInit } from '@angular/core';

import { ModelService } from "../../services/model.service";

@Component({
  selector: 'app-funcion',
  templateUrl: './funcion.page.html',
  styleUrls: ['./funcion.page.scss'],
})
export class FuncionPage implements OnInit {
  coleccion="funcion";

  doc={id:'',data:{roll:"Service Customer",rollEmpresa:"FMS"}};
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
