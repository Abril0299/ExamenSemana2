import { Injectable } from '@angular/core';
import { Trabajador } from '../interface/trabajador.modelo';
@Injectable({
  providedIn: 'root'
})

export class TrabajadorService {

  constructor() { }

  usuarios:Trabajador[]=[]

  getAll(){
    return this.usuarios;
  }

  addUser(user:Trabajador){
    this.usuarios.push(user);
  }

  Borrar(){
    this.usuarios.pop();
  }
}
