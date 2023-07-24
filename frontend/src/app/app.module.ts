import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InfoComponent } from './info/info.component';
import { PlatosComponent } from './platos/platos.component';
import { HttpClientModule } from '@angular/common/http';
import { SesionComponent } from './sesion/sesion.component';
import { MenuDiaComponent } from './menu-dia/menu-dia.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

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
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
