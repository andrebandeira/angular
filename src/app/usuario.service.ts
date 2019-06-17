import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.host + "usuario"

  constructor(private http:HttpClient) { }

  public salvar(usuario:Usuario):Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }

  public delete(id:string):Observable<Usuario> {
    return this.http.delete<Usuario>(this.url + "/" + id);
  }

  public getUsuario(): Usuario {
    let usuario = new Usuario();
    usuario.nome = "Andre";
    usuario.email = "a@A.com";

    return usuario;
  }

  public listaUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }
}
