import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Renderer2
} from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { TipsService } from "src/app/services/tips.service";
import marked from "marked";
import * as hljs from "highlight.js";

@Component({
  selector: "app-tip-details",
  templateUrl: "./tip-details.page.html",
  styleUrls: ["./tip-details.page.scss"]
})
export class TipDetailsPage implements OnInit {
  pageId: string;
  tipData: string;
  path: string;
  clickedTip: Tip;
  bigFont = true;
  lightTheme = true;
  tipContentElement: HTMLElement;
  detailsFound: boolean = true;
  contributor: HTMLElement;

  @ViewChild("content", { static: false }) codeElement: ElementRef;
  @ViewChild("tipContent", { static: false }) tipContent: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private tipService: TipsService,
    private cdf: ChangeDetectorRef,
    private renderer2: Renderer2
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.clickedTip = this.router.getCurrentNavigation().extras.state.tip;
        this.pageId = this.clickedTip.descFileName;
        }
    });

  }
  ionViewDidEnter(){
  

        this.path = this.tipService.getTipDetailsFileName(this.pageId);
        this.tipService.getTipFileDetails(this.pageId).subscribe(data => {
          this.detailsFound = true;
          marked.setOptions({});
          this.tipData = marked.parse(data);
          this.tipData = marked.parse(data);
          setTimeout(() => {
            let collPre = this.codeElement.nativeElement.getElementsByTagName(
              "pre"
            );
            for (let itm of collPre) {
              hljs.highlightBlock(itm);
            }
            this.renderer2.removeClass(
              this.codeElement.nativeElement,
              "display-none"
            );
            //this.admobFree.banner.show();
          });
          this.cdf.detectChanges();
        });
    
  }

  ngOnInit() {}

  goBack() {
    this.navCtrl.pop();
  }
}
