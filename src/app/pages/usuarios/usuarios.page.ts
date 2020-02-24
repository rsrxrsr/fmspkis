import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ModelService } from "../../services/model.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  public coleccion="usuario";

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