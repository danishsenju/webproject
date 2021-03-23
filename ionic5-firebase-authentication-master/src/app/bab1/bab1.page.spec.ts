import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bab1Page } from './bab1.page';

describe('Bab1Page', () => {
  let component: Bab1Page;
  let fixture: ComponentFixture<Bab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bab1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
