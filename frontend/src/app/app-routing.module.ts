import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlatosComponent } from './components/platos/platos.component';
import { InfoComponent } from './components/info/info.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { MenuDiaComponent } from './components/menu-dia/menu-dia.component';
import { AdminComponent } from './components/admin/admin.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'plato', component:PlatosComponent},
  {path: 'info', component:InfoComponent},
  {path: 'sesion', component:SesionComponent},
  {path: 'menuDia', component:MenuDiaComponent},
  {path: 'admin', component:AdminComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
