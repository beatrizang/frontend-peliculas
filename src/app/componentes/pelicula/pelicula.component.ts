import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  peliculas: Peliculas[];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe(
      peliculas => this.peliculas = peliculas
    );
  }

  eliminarPelicula(pelicula: Peliculas):void{
    Swal.fire({
      title: 'Estas seguro de eliminar esta pelicula?',
      text: "Al realizar esta acción no hay vuelta atrás!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.peliculasService.eliminarPelicula(pelicula.id_pelicula).subscribe(
          response =>{
            this.peliculas = this.peliculas.filter(peli => peli !== pelicula)
            Swal.fire(
              'Eliminada!',
              `La pelicula ${pelicula.titulo} fue eliminada con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
