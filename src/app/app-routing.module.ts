import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGeneroComponent } from './componentes/form-genero/form-genero.component';
import { FormPeliculaComponent } from './componentes/form-pelicula/form-pelicula.component';
import { GenerosComponent } from './componentes/generos/generos.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'inicio',component:PrincipalComponent},
  {path:'peliculas/form',component: FormPeliculaComponent},
  {path:'peliculas/form/:id',component: FormPeliculaComponent},
  {path:'generos',component:GenerosComponent},
  {path:'listas',component:ListasComponent},
  {path:'generos/form',component:FormGeneroComponent},
  {path:'generos/form/:id',component:FormGeneroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
