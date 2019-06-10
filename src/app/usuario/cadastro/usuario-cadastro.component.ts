import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario:Usuario;

  constructor() { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  public salvar(){
    alert("salvo");
    console.log(this.usuario);
  }

}
