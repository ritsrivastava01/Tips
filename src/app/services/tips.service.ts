import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor(protected http: HttpClient) { }
  public getTipList():Observable<Tip[]> {

     return this.http.get<Tip[]>('https://raw.githubusercontent.com/ritsrivastava01/TS_TIPS/master/tip.json')
  }

  public getTipFileDetails(tipFileName): Observable<any> {
    return this.http.get(`https://raw.githubusercontent.com/ritsrivastava01/TS_TIPS/master/tips/${tipFileName}.md?${new Date()}`, {responseType: 'text'});
      // .pipe(
      //   map((data: any) => {
      //     console.log(data);
      //     return data._body}
      //     )
      //   );

  }

  public getTipDetailsFileName(tipFileName): string {
    return `https://raw.githubusercontent.com/ritsrivastava01/TS_TIPS/master/tips/${tipFileName}.md`;

  }
}
