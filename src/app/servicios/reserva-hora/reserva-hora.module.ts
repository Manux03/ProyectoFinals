import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaHoraPageRoutingModule } from './reserva-hora-routing.module';

import { ReservaHoraPage } from './reserva-hora.page';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaHoraPageRoutingModule,
    MatSelectModule
  ],
  declarations: [ReservaHoraPage]
})


export class ReservaHoraPageModule {}
