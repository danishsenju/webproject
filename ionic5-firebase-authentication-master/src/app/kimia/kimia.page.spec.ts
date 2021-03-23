import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KimiaPage } from './kimia.page';

describe('KimiaPage', () => {
  let component: KimiaPage;
  let fixture: ComponentFixture<KimiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KimiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KimiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
