import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Renderer2,
} from "@angular/core";
import { NavController, ToastController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { TipsService } from "src/app/services/tips.service";
import marked from "marked";
import * as hljs from "highlight.js";
import { StyleService } from "src/app/services/style.service";
import { ManageBookmarkService } from "src/app/services/manage-bookmark.service";
import { NavigationService } from "src/app/services/navigation.service";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";

@Component({
  selector: "app-tip-details",
  templateUrl: "./tip-details.page.html",
  styleUrls: ["./tip-details.page.scss"],
})
export class TipDetailsPage implements OnInit {
  pageId: string;
  tipData: string;
  path: string;
  clickedTip: Tip;
  bigFont = false;
  lightTheme = true;
  tipContentElement: HTMLElement;
  detailsFound: boolean = true;
  contributor: HTMLElement;

  @ViewChild("content", { static: false }) codeElement: ElementRef;
  @ViewChild("tipContent", { static: false }) tipContent: ElementRef;
  @ViewChild("content", { static: false }) contentContainer: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private tipService: TipsService,
    private cdf: ChangeDetectorRef,
    private renderer2: Renderer2,
    private styleService: StyleService,
    private bookmarkedService: ManageBookmarkService,
    public toastController: ToastController,
    private navigationService: NavigationService,
    private socialSharing: SocialSharing
  ) {
    this.lightTheme =
      this.styleService.cssFileName() === "dracula" ? false : true;
    //TODO -- Remove
    this.clickedTip = {
      name: "Ritesh Srivastava",
      bookmarked: false,
      desc: "",
      descFileName: "",
      gitHubUrl: "",
      title: "",
    };

    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.clickedTip = this.router.getCurrentNavigation().extras.state.tip;
        this.pageId = this.clickedTip.descFileName;
        console.log(this.clickedTip);
      }
    });
  }
  ionViewDidEnter() {
    this.tipContentElement = this.contentContainer.nativeElement; //['getNativeElement']('#content');
    this.path = this.tipService.getTipDetailsFileName(this.pageId);
    this.tipService.getTipFileDetails(this.pageId).subscribe((data) => {
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
      });
      this.cdf.detectChanges();
    });
  }

  ngOnInit() {}

  goBack() {
    this.navigationService.setCurrentPage(
      this.navigationService.getCurrentPage()
    );
    this.navCtrl.pop();
  }

  share = () => {
    this.socialSharing
      .share(
        "Hi this is awesome Tips app, please install via",
        "Tips - Awesome App",
        "",
        "https://play.google.com/store/apps/details?id=ritsrivastava.Tips&hl=en"
      )
      .then((e) => console.log("done"))
      .catch((e) => console.log(e));
  };
  changeTheme = () => {
    setTimeout(() => {
      this.lightTheme = !this.lightTheme;
      this.changeCSS();
    }, 200);
  };

  changeCSS = () => {
    let fName =
      this.styleService.cssFileName() === "dracula" ? "default" : "dracula";
    this.styleService.updateLink(fName);
  };

  changeFont = () => {
    setTimeout(() => {
      this.bigFont
        ? this.renderer2.removeClass(this.tipContentElement, "increaseFont")
        : this.renderer2.addClass(this.tipContentElement, "increaseFont");
      this.bigFont = !this.bigFont;
    }, 200);
  };

  manageBookmark = () => {
    this.clickedTip.bookmarked = !this.clickedTip.bookmarked;
    this.clickedTip.bookmarked
      ? this.bookmarkedService.addBookmarkTip(this.clickedTip)
      : this.bookmarkedService.removeBookmarkTip(this.clickedTip);
    this.presentToast(
      this.clickedTip.bookmarked
        ? "Tip added in your bookmark"
        : "Tip removed from your bookmark"
    );
  };

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      animated: true,
      position: "bottom",
      color: "dark",
    });
    toast.present();
  }
}
