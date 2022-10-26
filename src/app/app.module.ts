import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatComponent } from './chat/chat.component';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,    
    SidebarComponent,
    ChatComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
