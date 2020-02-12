import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContributePage } from './contribute.page';

describe('AboutUsPage', () => {
  let component: ContributePage;
  let fixture: ComponentFixture<ContributePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContributePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
