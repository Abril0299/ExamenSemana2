import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador.modelo';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listado:Trabajador[]=[];

  constructor(private TrabajadorService:TrabajadorService) { }

  ngOnInit(): void {
    this.listado= this.TrabajadorService.getAll()
   
  }

  BorrarUsuario(){
    this.TrabajadorService.Borrar()
  }

}
