import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {
    let usuario = new Usuario();
    usuario.nome = "Andre";
    usuario.email = "a@A.com";

    return usuario;
  }

  public listaUsuario(): Usuario[] {
    return [
      {
        nome: 'Andre',
        email: 'a@a.com'
      },
      {
        nome: 'Luis',
        email: 'b@b.com'
      },
      {
        nome: 'Bandeira',
        email: 'c@c.com'
      }
    ]
  }
}
