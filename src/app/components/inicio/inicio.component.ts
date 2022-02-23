import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/interface/trabajador.modelo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
formulario1= this.nuevoFormualario.group({
  nombre:'',
  apellido:'',
  salario:'',
  puesto:''

})


  constructor(private nuevoFormualario:FormBuilder,private TrabajadorService:TrabajadorService) { }

  ngOnInit(): void {
  }


  
guardar(){
  let nuevoUsuario : Trabajador = {
    nombre :this.formulario1.get('nombre')?.value,
    apellido :this.formulario1.get('apellido')?.value,
    salario :this.formulario1.get('salario')?.value,
    puesto :this.formulario1.get('puesto')?.value,
  }

  
  this.TrabajadorService.addUser(nuevoUsuario);
  this.limpiarForms();

}
limpiarForms() {
  this.formulario1.reset();
}

}
