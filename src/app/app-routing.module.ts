import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetalleComponent } from './character/detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { TarjetaComponent } from './character/tarjeta/tarjeta.component';
import { AddComponent } from './character/add/add.component';

const routes: Routes = [
  /*PARA ABRIR EN LOCALHOST DIRECTAMENTE EN HOME*/
  {
    path: '',
    component: HomeComponent
  },
  /*PARA ABRIR EL HOME CON LA RUTA home*/
  {
    path: 'home',
    component: HomeComponent
  },
  /*PARA ABRIR LA LISTA CON LA RUTA*/
  {
    path: 'tarjeta',
    component: TarjetaComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
