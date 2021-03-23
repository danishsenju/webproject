import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bab1ppPage } from './bab1pp.page';

describe('Bab1ppPage', () => {
  let component: Bab1ppPage;
  let fixture: ComponentFixture<Bab1ppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bab1ppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bab1ppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
