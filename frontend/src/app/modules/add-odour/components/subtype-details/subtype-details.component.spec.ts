import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtypeDetailsComponent } from './subtype-details.component';

describe('SubtypeDetailsComponent', () => {
  let component: SubtypeDetailsComponent;
  let fixture: ComponentFixture<SubtypeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubtypeDetailsComponent]
    });
    // TODO @Tomas hay que crear un dommy de OdourSubtype ¿?
    // fixture = TestBed.createComponent(SubtypeDetailsComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
