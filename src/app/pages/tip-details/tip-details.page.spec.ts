import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipDetailsPage } from './tip-details.page';

describe('TipDetailsPage', () => {
  let component: TipDetailsPage;
  let fixture: ComponentFixture<TipDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
