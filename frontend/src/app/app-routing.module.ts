import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlatosComponent } from './platos/platos.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'plato', component:PlatosComponent},
  {path: 'info', component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
