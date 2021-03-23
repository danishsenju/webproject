import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KimiaPageRoutingModule } from './kimia-routing.module';

import { KimiaPage } from './kimia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KimiaPageRoutingModule
  ],
  declarations: [KimiaPage]
})
export class KimiaPageModule {}
