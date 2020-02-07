import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipDetailsPage } from './tip-details.page';

const routes: Routes = [
  {
    path: '',
    component: TipDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipDetailsPageRoutingModule {}
