import { Component } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { ManageBookmarkService } from 'src/app/services/manage-bookmark.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import {
  Page,
  LEFT_NAVIGATION,
  OTHER_NAVIGATION
} from 'src/model/page.interface';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  public appPages: Page[] = LEFT_NAVIGATION;
  public OtherOptions: Page[] = OTHER_NAVIGATION;
  public bookmarkedTipList: number;

  constructor(
    private appVersion: AppVersion,
    private bookmarkedService: ManageBookmarkService,
    private router: Router,
    private navigationService: NavigationService
  ) {
    // console.log(
    //   this.appVersion.getAppName(),
    //   this.appVersion.getPackageName(),
    //   this.appVersion.getVersionCode(),
    //   this.appVersion.getVersionNumber()
    // );
    this.bookmarkedService.bookmarkedTipList.subscribe(x => {
      this.bookmarkedTipList = x.filter(y => y != null).length;
    });
  }

  navigatePage(page: Page) {
    // let navigationExtras: NavigationExtras = {
    //   state: {
    //     pageId: page.id
    //   }
    // };
    //this.spinnerSer.showSpinner();
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navigationService.setCurrentPage(page);
    this.router.navigate([page.url]);
  }
}
