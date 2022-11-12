import { Component, OnInit } from '@angular/core';
import { Generos } from 'src/app/clases/generos';
import { GenerosService } from 'src/app/servicios/generos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  generos: Generos[];

  constructor(private generosService: GenerosService) { }

  ngOnInit(): void {

    this.generosService.getGeneros().subscribe(
      generos => this.generos = generos
    );
  }

  eliminarGenero(genero: Generos):void{
    Swal.fire({
      title: 'Estas seguro de eliminar este genero?',
      text: "Al realizar esta acción no hay vuelta atrás!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.generosService.eliminarGenero(genero.id_genero).subscribe(
          response =>{
            this.generos = this.generos.filter(gene => gene !== genero)
            Swal.fire(
              'Eliminado!',
              `El género ${genero.nombre} fue eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
