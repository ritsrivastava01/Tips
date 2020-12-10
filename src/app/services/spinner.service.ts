import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class SpinnerService {
  private _spinner;

  constructor(private loadingCtrl: LoadingController) {
    //this.createSpinner();
  }

  private createSpinner = (): Promise<boolean> => {
    return new Promise((response, rej) => {
      this.loadingCtrl
        .create({
          showBackdrop: true,
          cssClass: "transparent",
        })
        .then((res) => {
          this._spinner = res;
          this._spinner.present();
          return response(true);
        });
    });
  };

  public showSpinner = (): Promise<boolean> => {
    return new Promise((res, rej) => {
      this.createSpinner().then(() => {
        return res(true);
      });
    });
  };

  public hideSpinner = (): void => {
    this._spinner && this._spinner.dismiss();
  };
}
