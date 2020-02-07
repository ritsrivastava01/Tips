import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { IonicModule } from '@ionic/angular';
import { LeftMenuRoutingModule } from './left-menu/left-menu-routing.module';



@NgModule({
  declarations: [LeftMenuComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    LeftMenuRoutingModule,
  ],
  exports:[
    LeftMenuComponent
  ]
})
export class ShareModule { }
