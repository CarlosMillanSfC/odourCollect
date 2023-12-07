import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIconComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeIconComponent;
  let fixture: ComponentFixture<HomeIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIconComponent]
    });
    fixture = TestBed.createComponent(HomeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
