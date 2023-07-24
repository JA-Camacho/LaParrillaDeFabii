import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlatosComponent } from './platos/platos.component';
import { InfoComponent } from './info/info.component';
import { SesionComponent } from './sesion/sesion.component';
import { MenuDiaComponent } from './menu-dia/menu-dia.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'plato', component:PlatosComponent},
  {path: 'info', component:InfoComponent},
  {path: 'sesion', component:SesionComponent},
  {path: 'menuDia', component:MenuDiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
