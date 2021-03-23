import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bab4ppPage } from './bab4pp.page';

describe('Bab4ppPage', () => {
  let component: Bab4ppPage;
  let fixture: ComponentFixture<Bab4ppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bab4ppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bab4ppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
