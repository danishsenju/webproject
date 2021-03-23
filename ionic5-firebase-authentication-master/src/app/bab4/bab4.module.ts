import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab4PageRoutingModule } from './bab4-routing.module';

import { Bab4Page } from './bab4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab4PageRoutingModule
  ],
  declarations: [Bab4Page]
})
export class Bab4PageModule {}
