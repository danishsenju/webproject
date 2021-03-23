import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab1ppPageRoutingModule } from './bab1pp-routing.module';

import { Bab1ppPage } from './bab1pp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab1ppPageRoutingModule
  ],
  declarations: [Bab1ppPage]
})
export class Bab1ppPageModule {}
