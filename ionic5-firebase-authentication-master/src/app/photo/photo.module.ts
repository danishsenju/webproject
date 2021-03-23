import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FileSizeFormatPipe } from './file-size-format.pipe';
import { PhotoPageRoutingModule } from './photo-routing.module';

import { PhotoPage } from './photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoPageRoutingModule
  ],
  declarations: [PhotoPage, FileSizeFormatPipe]
})
export class PhotoPageModule {}
