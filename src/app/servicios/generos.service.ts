import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Generos } from '../clases/generos';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private urlEndPoint: string = 'http://localhost:8080/api/generos';

  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'})

  constructor(private http: HttpClient) { }

  getGeneros():Observable<Generos[]>{
    return this.http.get<Generos[]>(this.urlEndPoint);
  }

  crearGenero(genero: Generos):Observable<Generos>{
    return this.http.post<Generos>(this.urlEndPoint, genero, {headers: this.httpHeaders});
  }

  getGenero(id):Observable<Generos>{
    return this.http.get<Generos>(`${this.urlEndPoint}/${id}`);
  }

  modificarGenero(genero: Generos): Observable<Generos>{
    return this.http.put<Generos>(`${this.urlEndPoint}/${genero.id_genero}`,genero,{headers: this.httpHeaders});
  }

  eliminarGenero(id: number):Observable<Generos>{
    return this.http.delete<Generos>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
  }
}
