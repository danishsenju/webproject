import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bab4Page } from './bab4.page';

describe('Bab4Page', () => {
  let component: Bab4Page;
  let fixture: ComponentFixture<Bab4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bab4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
