import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Generos } from 'src/app/clases/generos';
import { GenerosService } from 'src/app/servicios/generos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-genero',
  templateUrl: './form-genero.component.html',
  styleUrls: ['./form-genero.component.css']
})
export class FormGeneroComponent implements OnInit {

  genero: Generos = new Generos();

  constructor(private generoService: GenerosService, private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarGenero();
  }
  cargarGenero():void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id'];
      if(id){
        this.generoService.getGenero(id).subscribe(
          (genero) => this.genero = genero
        )
      }
    })
  }

  crearGenero():void{
    this.generoService.crearGenero(this.genero).subscribe(
      genero => {
        this.router.navigate(['/generos'])
        Swal.fire('Nuevo Genero',`Genero ${genero.nombre} creado con éxito`,'success');
      }
    )
  }

  modificarGenero():void{
    this.generoService.modificarGenero(this.genero).subscribe(
      genero => {
        this.router.navigate(['/generos'])
        Swal.fire('Genero Modificado',`Genero ${genero.nombre} actualizado con éxito!`,'success');
      }
    )
  }

}
