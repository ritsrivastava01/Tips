import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Page } from 'src/model/page.interface';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss']
})
export class AboutUsPage implements OnInit {
  currentPage: Page;
  constructor(
    private navigationService: NavigationService,
    private cdr: ChangeDetectorRef
  ) {
    this.navigationService.navigatePage.subscribe((page: Page) => {
      this.currentPage = page;
      this.cdr.detectChanges();
    });
  }

  OnInit() {}
}
