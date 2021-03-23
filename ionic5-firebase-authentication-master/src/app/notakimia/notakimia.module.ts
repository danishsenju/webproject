import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotakimiaPageRoutingModule } from './notakimia-routing.module';

import { NotakimiaPage } from './notakimia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotakimiaPageRoutingModule
  ],
  declarations: [NotakimiaPage]
})
export class NotakimiaPageModule {}
