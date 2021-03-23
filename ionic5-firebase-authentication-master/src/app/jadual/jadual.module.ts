import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadualPageRoutingModule } from './jadual-routing.module';

import { JadualPage } from './jadual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadualPageRoutingModule
  ],
  declarations: [JadualPage]
})
export class JadualPageModule {}
