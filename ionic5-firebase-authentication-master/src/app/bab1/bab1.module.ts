import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab1PageRoutingModule } from './bab1-routing.module';

import { Bab1Page } from './bab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab1PageRoutingModule
  ],
  declarations: [Bab1Page]
})
export class Bab1PageModule {}
