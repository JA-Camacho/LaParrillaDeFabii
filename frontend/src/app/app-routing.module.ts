import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlatosComponent } from './components/platos/platos.component';
import { InfoComponent } from './components/info/info.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { MenuDiaComponent } from './components/menu-dia/menu-dia.component';
import { AdminComponent } from './components/admin/admin.component';
import { authGuard } from './auth.guard';
import { CrearPlatoComponent } from './components/crear-plato/crear-plato.component';
import { ResComComponent } from './components/res-com/res-com.component';
import { CrearMenuComponent } from './components/crear-menu/crear-menu.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'plato', component:PlatosComponent},
  {path: 'info', component:InfoComponent},
  {path: 'sesion', component:SesionComponent},
  {path: 'menuDia', component:MenuDiaComponent},
  {path: 'admin', component:AdminComponent, canActivate: [authGuard]},
  {path: 'crearPlato', component:CrearPlatoComponent, canActivate: [authGuard]},
  {path: 'crearMenu', component:CrearMenuComponent, canActivate: [authGuard]},
  {path: 'resCom', component:ResComComponent, canActivate: [authGuard]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
