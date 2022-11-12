import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';
import { HttpClientModule } from '@angular/common/http';
import { FormPeliculaComponent } from './componentes/form-pelicula/form-pelicula.component';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { GenerosComponent } from './componentes/generos/generos.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { FormGeneroComponent } from './componentes/form-genero/form-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PeliculaComponent,
    FormPeliculaComponent,
    PrincipalComponent,
    GenerosComponent,
    ListasComponent,
    FormGeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
