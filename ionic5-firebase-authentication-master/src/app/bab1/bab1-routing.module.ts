import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bab1Page } from './bab1.page';

const routes: Routes = [
  {
    path: '',
    component: Bab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bab1PageRoutingModule {}
