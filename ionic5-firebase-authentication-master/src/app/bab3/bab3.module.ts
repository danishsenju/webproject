import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab3PageRoutingModule } from './bab3-routing.module';

import { Bab3Page } from './bab3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab3PageRoutingModule
  ],
  declarations: [Bab3Page]
})
export class Bab3PageModule {}
