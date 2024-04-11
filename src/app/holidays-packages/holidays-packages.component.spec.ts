import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysPackagesComponent } from './holidays-packages.component';

describe('HolidaysPackagesComponent', () => {
  let component: HolidaysPackagesComponent;
  let fixture: ComponentFixture<HolidaysPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolidaysPackagesComponent]
    });
    fixture = TestBed.createComponent(HolidaysPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
