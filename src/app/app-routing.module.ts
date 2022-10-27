import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  
  {path: 'formulario',  component: FormularioComponent},
  {path: '', component: ChatComponent},  
  {path: '**',  component: AppComponent}  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
