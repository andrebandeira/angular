import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario:Usuario;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  public salvar(){
    this.usuarioService.salvar(this.usuario).subscribe(
      reponse => {
        alert("Salvo com sucesso");
      },
      error => {
        alert("Erro ao Salvar");
      }
    );
  }

}
