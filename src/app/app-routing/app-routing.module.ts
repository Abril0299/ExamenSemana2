

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';


import { ListaUsuariosComponent } from '../components/lista-usuarios/lista-usuarios.component';
import { InicioComponent } from '../components/inicio/inicio.component';


const routes : Routes = [


  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'listado',
    component:ListaUsuariosComponent
  },
]

@NgModule({  
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
