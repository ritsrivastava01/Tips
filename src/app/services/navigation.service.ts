import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Page, LEFT_NAVIGATION } from 'src/model/page.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor() {}
  public navigatePage: Subject<Page> = new Subject();
  private _page: Page = LEFT_NAVIGATION[0];

  public setCurrentPage = (page: Page) => {
    this._page = page;
    this.navigatePage.next(page);
  };

  public getCurrentPage = (): Page => this._page;
}
