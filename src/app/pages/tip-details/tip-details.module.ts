import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipDetailsPageRoutingModule } from './tip-details-routing.module';

import { TipDetailsPage } from './tip-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipDetailsPageRoutingModule
  ],
  declarations: [TipDetailsPage]
})
export class TipDetailsPageModule {}
