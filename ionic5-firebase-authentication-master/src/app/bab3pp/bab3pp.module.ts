import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab3ppPageRoutingModule } from './bab3pp-routing.module';

import { Bab3ppPage } from './bab3pp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab3ppPageRoutingModule
  ],
  declarations: [Bab3ppPage]
})
export class Bab3ppPageModule {}
