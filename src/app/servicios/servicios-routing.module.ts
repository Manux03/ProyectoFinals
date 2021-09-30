import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosPage } from './servicios.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosPage
  },  {
    path: 'reserva-hora',
    loadChildren: () => import('./reserva-hora/reserva-hora.module').then( m => m.ReservaHoraPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosPageRoutingModule {}
