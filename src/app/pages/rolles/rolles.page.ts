import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ModelService } from "../../services/model.service";

@Component({
  selector: 'app-rolles',
  templateUrl: './rolles.page.html',
  styleUrls: ['./rolles.page.scss'],
})
export class RollesPage implements OnInit {
  public coleccion="roll";

  constructor(
    private router: Router,
    public model: ModelService) {};

  ngOnInit() {
    //console.log("init")
    this.model.consultar(this.coleccion);
  }

  public selectRow(event, item ){
    this.model.entity[this.coleccion]=item
    this.router.navigate([this.coleccion]);
  }

}