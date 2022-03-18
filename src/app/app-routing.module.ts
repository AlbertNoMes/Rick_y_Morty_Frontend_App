import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetalleComponent } from './character/detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { TarjetaComponent } from './character/tarjeta/tarjeta.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'tarjeta',
    component: TarjetaComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
