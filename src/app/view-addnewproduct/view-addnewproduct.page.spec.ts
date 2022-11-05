import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAddnewproductPage } from './view-addnewproduct.page';

describe('ViewAddnewproductPage', () => {
  let component: ViewAddnewproductPage;
  let fixture: ComponentFixture<ViewAddnewproductPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddnewproductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAddnewproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
