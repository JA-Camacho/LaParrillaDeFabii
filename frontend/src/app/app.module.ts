import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InfoComponent } from './components/info/info.component';
import { PlatosComponent } from './components/platos/platos.component';
import { HttpClientModule } from '@angular/common/http';
import { SesionComponent } from './components/sesion/sesion.component';
import { MenuDiaComponent } from './components/menu-dia/menu-dia.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { AdminComponent } from './components/admin/admin.component';
import { CrearPlatoComponent } from './components/crear-plato/crear-plato.component';
import { register } from 'swiper/element/bundle';
import { ResComComponent } from './components/res-com/res-com.component';
import { CrearMenuComponent } from './components/crear-menu/crear-menu.component';

register();
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    CarouselComponent,
    InfoComponent,
    PlatosComponent,
    SesionComponent,
    MenuDiaComponent,
    ComentariosComponent,
    AdminComponent,
    CrearPlatoComponent,
    ResComComponent,
    CrearMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
