import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo:any[] = [];

  constructor(
    private route:ActivatedRoute,
    private _servicio:EquipoService
  ) {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.equipo = this._servicio.obtenerUno(params['id']);
    })
  }

  ngOnInit() {
  }

}
