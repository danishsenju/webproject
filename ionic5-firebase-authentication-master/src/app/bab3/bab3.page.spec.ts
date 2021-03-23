import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bab3Page } from './bab3.page';

describe('Bab3Page', () => {
  let component: Bab3Page;
  let fixture: ComponentFixture<Bab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bab3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
