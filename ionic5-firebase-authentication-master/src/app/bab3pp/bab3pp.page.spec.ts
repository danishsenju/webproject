import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bab3ppPage } from './bab3pp.page';

describe('Bab3ppPage', () => {
  let component: Bab3ppPage;
  let fixture: ComponentFixture<Bab3ppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bab3ppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bab3ppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
