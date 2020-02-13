import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Page } from 'src/model/page.interface';
import marked from 'marked';
import * as hljs from 'highlight.js';
import { TipsService } from 'src/app/services/tips.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss']
})
export class AboutUsPage implements OnInit {
  mdData;
  @ViewChild('content',{static:true}) codeElement: ElementRef;
  currentPage: Page;
  constructor(
    private tipService: TipsService
  ) {}

  ngOnInit() {
  this.tipService.getDetails('README')
  .subscribe(data=>{
    marked.setOptions({});
    this.mdData = marked.parse(data);
    setTimeout(() => {
      let collPre = this.codeElement.nativeElement.getElementsByTagName('pre');
      for (let itm of collPre) {
        hljs.highlightBlock(itm);
      };
     // this.spinnerSer.hideSpinner();
    }, 10);
  })
  }
}
