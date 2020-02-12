import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Page } from 'src/model/page.interface';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.page.html',
  styleUrls: ['./contribute.page.scss']
})
export class ContributePage {
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
}
