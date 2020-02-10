import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import {
  of,
  Observer,
  Observable,
  from,
  BehaviorSubject,
  observable,
  ReplaySubject,
  Subject
} from 'rxjs';
const { Storage } = Plugins;
const BOOKMARKED_TIP_KEY = 'bookmarkedTips';

@Injectable({
  providedIn: 'root'
})
export class ManageBookmarkService {
  constructor() {
    this.getBookmarkedTips().subscribe(x => this.bookmarkedTipList.next(x));
  }
  public bookmarkedTipList = new BehaviorSubject([]);

  public addBookmarkTip = (tip): Promise<Boolean> => {
    let listArr = [];
    return Storage.get({ key: BOOKMARKED_TIP_KEY }).then(list => {
      listArr = list.value ? JSON.parse(list.value) : [];
      listArr = [...listArr, tip.title];
      Storage.set({
        key: BOOKMARKED_TIP_KEY,
        value: JSON.stringify(listArr)
      });
      this.bookmarkedTipList.next(listArr);
      return Promise.resolve(true);
    });
  };

  public removeBookmarkTip = (tip): Promise<Boolean> => {
    let listArr = [];
    return Storage.get({ key: BOOKMARKED_TIP_KEY }).then(val => {
      if (val.value != null) {
        listArr = JSON.parse(val.value);
        listArr = listArr.filter(x => x !== tip.title);
        Storage.set({
          key: BOOKMARKED_TIP_KEY,
          value: JSON.stringify(listArr)
        });
        this.bookmarkedTipList.next(listArr);
        return Promise.resolve(true);
      }
    });
  };

  public getBookmarkedTips = (): Observable<string[]> => {
    return from(
      Storage.get({ key: BOOKMARKED_TIP_KEY }).then(val => {
        return JSON.parse(val.value);
      })
    );
  };

  public clearBookmarkedTips = () => Storage.clear();
}
