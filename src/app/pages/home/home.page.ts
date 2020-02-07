import { Component } from '@angular/core';
import { TipsService } from '../../services/tips.service';
import { Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { JsonPipe } from '@angular/common';
import { Resolve, Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TipDetailsPage } from '../tip-details/tip-details.page';

const { Storage } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tipList:Observable<Tip[]> =this.tipService.getTipList();
  constructor(private tipService:TipsService, private navController : NavController, private router: Router) {
    

  }

   addBookmark(e: Event, tip: Tip):boolean {
    tip.bookmarked = !tip.bookmarked;

    if(tip.bookmarked){
       Storage.get({key:'favTips'})
      .then(list=>{
          let listArr = list.value? JSON.parse(list.value): [];
          listArr=[...listArr,tip.title];
           Storage.set({
            key:'favTips',
            value:JSON.stringify(listArr)
          })
      })
 
    }
    else {
      Storage.get({key:'favTips'}).then((val) => {
        if (val.value != null) {
          let listArr = JSON.parse(val.value);
          listArr = listArr.filter(x => x !== tip.title);
          Storage.set({
            key:'favTips',
            value:JSON.stringify(listArr)
          });

        }

      })
    }
    return true;
    // this.refreshColl();
    // e.stopPropagation();
    // return false;
  }

  loadDetailedTip(tip: Tip) {

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
  }

}
