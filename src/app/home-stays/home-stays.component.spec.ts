import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStaysComponent } from './home-stays.component';

describe('HomeStaysComponent', () => {
  let component: HomeStaysComponent;
  let fixture: ComponentFixture<HomeStaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeStaysComponent]
    });
    fixture = TestBed.createComponent(HomeStaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
