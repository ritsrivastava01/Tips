import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { IonicModule } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [LeftMenuComponent, HeaderComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [LeftMenuComponent,HeaderComponent],
  providers: [AppVersion]
})
export class ShareModule {}
