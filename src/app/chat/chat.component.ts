import { Component} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent  {

  apiURL = 'http://thanos.sodimac.cl:3200';

  status: number | undefined;
  session: number | undefined;  
  estimated_status: number | undefined;
  message: string | undefined;
  
  

  mensaje = '';  
  static apiURL: string;

  constructor( ) {}
  
  public async getMensaje(mensaje:string)
  { 
    this.mensaje = mensaje;  
    const api = `${this.apiURL}/${this.mensaje}` ;
    console.log(ChatComponent.apiURL);
    
    const response = await fetch(ChatComponent.apiURL);
    const data = await response.json();
    console.log(data);
  }  

}
