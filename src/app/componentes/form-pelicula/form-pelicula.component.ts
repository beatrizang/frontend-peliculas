import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Peliculas } from 'src/app/clases/peliculas';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-pelicula',
  templateUrl: './form-pelicula.component.html',
  styleUrls: ['./form-pelicula.component.css']
})
export class FormPeliculaComponent implements OnInit {

  pelicula: Peliculas = new Peliculas();

  constructor(private peliculaService: PeliculasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPelicula();
  }

  cargarPelicula():void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.peliculaService.getPelicula(id).subscribe(
          (pelicula) => this.pelicula = pelicula
        )
      }
    })
  }

  crearPelicula():void{
    this.peliculaService.crearPelicula(this.pelicula).subscribe(
      pelicula => {
        this.router.navigate(['/inicio'])
        Swal.fire('Nueva Pelicula',`Pelicula ${pelicula.titulo} creada con éxito`,'success');
      }
    )
  }

  modificarPelicula():void{
    this.peliculaService.modificarPelicula(this.pelicula).subscribe(
      pelicula => {
        this.router.navigate(['/inicio'])
        Swal.fire('Pelicula Modificada', `Pelicula ${pelicula.titulo} actualizada con éxito`, 'success');
      }
    )
  }

}
