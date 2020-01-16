import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre: 'Oscar',
      especialidad: 'Desarrollo FullStack',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, repellendus nostrum. Rerum, minima laborum veritatis earum sit quis maxime enim, adipisci asperiores sapiente animi molestiae officiis porro doloremque quae dolores expedita deserunt distinctio iure ea atque! Dicta nulla culpa porro?'
    },
    {
      nombre: 'María',
      especialidad: 'Desarrollo JamStack',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, repellendus nostrum. Rerum, minima laborum veritatis earum sit quis maxime enim, adipisci asperiores sapiente animi molestiae officiis porro doloremque quae dolores expedita deserunt distinctio iure ea atque! Dicta nulla culpa porro?'
    }
  ]

  constructor() {
    console.log('Funcionando servicio.')
  }

  obtenerEquipo() {
    return this.equipo;
  }

  obtenerUno(i) {
    return this.equipo[i];
  }
}
