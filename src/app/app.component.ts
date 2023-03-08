import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primerProyecto';

  public nombre: string = '';
  public rol: string = '';
  
  
  saludo="";
  estado={
    antiguo:false,
    nuevo:false,
    aspirante:false
  }
  captura(){
    let est="";
    if(this.estado.antiguo){
      est=est+" Antiguo";

    }
    if(this.estado.nuevo){
      est=est+" Nuevo";

    }
    if(this.estado.aspirante){
      est=est+" Aspirante";

    }
    this.saludo="Bienvenid@ "+this.nombre+" usted es un "+this.rol+" "+est;
  }
}
