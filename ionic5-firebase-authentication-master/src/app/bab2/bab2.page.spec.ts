import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bab2Page } from './bab2.page';

describe('Bab2Page', () => {
  let component: Bab2Page;
  let fixture: ComponentFixture<Bab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bab2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
