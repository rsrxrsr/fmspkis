import { Component, OnInit } from '@angular/core';

import { ModelService } from "../../services/model.service";

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {
  coleccion="empresa";

  doc={id:'',data:{rollEmpresa:"Cliente"}};
  isUpdate=false; 

  constructor(
    public model: ModelService) {}

  ngOnInit() {
    //console.log("init")
    if (this.model.entity[this.coleccion]) {
      this.isUpdate=true;
      this.doc=this.model.entity[this.coleccion];
    }
  }

}
