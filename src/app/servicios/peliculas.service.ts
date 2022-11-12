import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Peliculas } from '../clases/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private urlEndPoint: string = 'http://localhost:8080/api/peliculas';

  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'})
  
  constructor(private http: HttpClient) { }

  
  getPeliculas():Observable<Peliculas[]>{
    return this.http.get<Peliculas[]>(this.urlEndPoint);
  }

  crearPelicula(pelicula: Peliculas):Observable<Peliculas>{
    return this.http.post<Peliculas>(this.urlEndPoint, pelicula, {headers: this.httpHeaders});
  }

  getPelicula(id):Observable<Peliculas>{
    return this.http.get<Peliculas>(`${this.urlEndPoint}/${id}`);
  }

  modificarPelicula(pelicula: Peliculas):Observable<Peliculas>{
    return this.http.put<Peliculas>(`${this.urlEndPoint}/${pelicula.id_pelicula}`,pelicula, {headers: this.httpHeaders})
  }

  eliminarPelicula(id: number):Observable<Peliculas>{
    return this.http.delete<Peliculas>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
  }
}
