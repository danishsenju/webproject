import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab2Page } from './bab2.page';

const routes: Routes = [
  {
    path: '',
    component: Bab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab2PageRoutingModule {}
