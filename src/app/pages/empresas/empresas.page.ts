import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ModelService } from "../../services/model.service";

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.page.html',
  styleUrls: ['./empresas.page.scss'],
})
export class EmpresasPage implements OnInit {
  public coleccion="empresa";

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