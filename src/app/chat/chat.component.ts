import { Component} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent  {

  nombre = '';
  mensaje = '';  

  constructor() {}

  
  public getMensaje(mensaje:string)
  {    
    this.mensaje = mensaje;
    console.log( this.mensaje );
    return this.mensaje;
  }  

}
