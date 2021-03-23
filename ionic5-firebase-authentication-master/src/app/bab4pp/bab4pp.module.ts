import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bab4ppPageRoutingModule } from './bab4pp-routing.module';

import { Bab4ppPage } from './bab4pp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bab4ppPageRoutingModule
  ],
  declarations: [Bab4ppPage]
})
export class Bab4ppPageModule {}
