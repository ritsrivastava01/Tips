import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Page } from 'src/model/page.interface';
import { TipsService } from 'src/app/services/tips.service';
import marked from 'marked';
import * as hljs from 'highlight.js';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.page.html',
  styleUrls: ['./contribute.page.scss']
})
export class ContributePage  implements OnInit{
  mdData;
  @ViewChild('content',{static:true}) codeElement: ElementRef;
  constructor(
    private tipService: TipsService,
     private styleService:StyleService
  ) {
  }
  ngOnInit() {
    this.tipService.getDetails('contribute')
    .subscribe(data=>{
      marked.setOptions({});
      this.mdData = marked.parse(data);
      setTimeout(() => {
        let collPre = this.codeElement.nativeElement.getElementsByTagName('pre');

      this.styleService.updateLink(this.styleService.cssFileName());
        for (let itm of collPre) {
          hljs.highlightBlock(itm);
        };
       // this.spinnerSer.hideSpinner();
      }, 10);
    })
    }
}
