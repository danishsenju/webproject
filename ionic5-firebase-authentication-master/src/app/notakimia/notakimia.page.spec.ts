import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotakimiaPage } from './notakimia.page';

describe('NotakimiaPage', () => {
  let component: NotakimiaPage;
  let fixture: ComponentFixture<NotakimiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotakimiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotakimiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
