import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab2PageRoutingModule } from './bab2-routing.module';

import { Bab2Page } from './bab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab2PageRoutingModule
  ],
  declarations: [Bab2Page]
})
export class Bab2PageModule {}
