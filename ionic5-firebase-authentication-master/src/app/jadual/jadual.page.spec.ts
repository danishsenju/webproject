import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JadualPage } from './jadual.page';

describe('JadualPage', () => {
  let component: JadualPage;
  let fixture: ComponentFixture<JadualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JadualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
