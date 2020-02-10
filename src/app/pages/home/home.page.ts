import { Component } from '@angular/core';
import { TipsService } from '../../services/tips.service';
import { Observable, forkJoin, of } from 'rxjs';
import {
  Resolve,
  Router,
  NavigationExtras,
  ActivatedRoute
} from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { ManageBookmarkService } from 'src/app/services/manage-bookmark.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Page, LEFT_NAVIGATION } from 'src/model/page.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  tipList: Observable<Tip[]>;
  currentPage: Page = LEFT_NAVIGATION[0];
  localTipList: Tip[];

  constructor(
    private tipService: TipsService,
    private router: Router,
    private bookmarkedService: ManageBookmarkService,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    public toastController: ToastController
  ) {
    //TEMP
    //this.bookmarkedService.clearBookmarkedTips();

    this.getTipList(false);

    this.navigationService.navigatePage.subscribe((page: Page) => {
      this.currentPage = page;
      this.getTipList(this.currentPage.id == 2);
    });
  }

  private getTipList = (onlyBookmarked: boolean = false) => {
    forkJoin(
      this.tipService.getTipList(),
      this.bookmarkedService.getBookmarkedTips()
    ).subscribe(data => {
      let tipArr = data[0];
      let savedBookmarkedTips: string[] = data[1];

      tipArr.forEach(x => {
        x.bookmarked = false;
        if (savedBookmarkedTips && savedBookmarkedTips.indexOf(x.title) != -1) {
          x.bookmarked = true;
        }
      });
      tipArr = onlyBookmarked ? tipArr.filter(x => x.bookmarked) : tipArr;
      this.localTipList = tipArr;
      this.tipList = of(tipArr);
    });
  };

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      animated: true,
      position: 'bottom',
      color: 'dark',
      showCloseButton: true
    });
    toast.present();
  }
  ionViewDidEnter = () => {};

  public addBookmark = (e: Event, tip: Tip): boolean => {
    tip.bookmarked = !tip.bookmarked;
    tip.bookmarked
      ? this.bookmarkedService.addBookmarkTip(tip)
      : this.bookmarkedService.removeBookmarkTip(tip);
    e.stopPropagation();
    this.presentToast(
      tip.bookmarked
        ? 'Tip added in your bookmark'
        : 'Tip removed from your bookmark'
    );
    this.currentPage &&
      this.currentPage.id == 2 &&
      this.tipList.subscribe(list => {
        this.tipList = of(list.filter(x => x.bookmarked));
      });
    return false;
  };

  getTips = () => {
    this.bookmarkedService.getBookmarkedTips().subscribe(x => console.log(x));
  };

  searchList(e: any) {
    //if (e.target.value != '') {
    this.tipList = of(
      this.localTipList.filter(x =>
        x.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      )
    );
    // } else {
    //   this.getTipList();
    // }
  }

  loadDetailedTip = (tip: Tip) => {
    let navigationExtras: NavigationExtras = {
      state: {
        tip: tip
      }
    };
    this.router.navigate(['tip-details'], navigationExtras);
    // let options: NativeTransitionOption = {
    //   direction: 'left',
    //   duration: 400,
    //   slowdownfactor: -1,
    //   iosdelay: 50
    // };
    //this.navController.navigateForward('tip-details',{'tip':JSON.stringify(tip)});
    //this.navCtrl.setRoot(TipDetailPage, {tip: itm});
    //this.admobFree.banner.hide();
  };
}
