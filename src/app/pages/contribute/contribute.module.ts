import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContributePageRoutingModule } from './contribute-routing.module';

import { ContributePage } from './contribute.page';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    ContributePageRoutingModule
  ],
  declarations: [ContributePage]
})
export class ContributePageModule {}
