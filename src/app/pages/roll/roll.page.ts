import { Component, OnInit } from '@angular/core';

import { ModelService } from "../../services/model.service";

@Component({
  selector: 'app-roll',
  templateUrl: './roll.page.html',
  styleUrls: ['./roll.page.scss'],
})
export class RollPage implements OnInit {
  coleccion="roll";

  doc={id:'',data:{rollEmpresa:"FMS"}};
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
