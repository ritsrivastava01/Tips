import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private _spinner;

  constructor(private loadingCtrl: LoadingController) {

   //this.createSpinner();

   }
   createSpinner(){
     this.loadingCtrl.create({
      showBackdrop: true,
      cssClass: 'transparent',
      
    }).then((res)=>{
      this._spinner = res;
      this._spinner.present();
    })
   }

  public showSpinner() {
    this.createSpinner();
    // this._spinner = this.loadingCtrl.create({
    //   showBackdrop: true
    // }).then((res)=> {
    //   this._spinner = res;
    //   res.present();
    // });

  }

  public hideSpinner() {
    this._spinner && this._spinner.dismiss();
  }

}
