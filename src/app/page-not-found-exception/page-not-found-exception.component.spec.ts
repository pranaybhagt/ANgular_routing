import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundExceptionComponent } from './page-not-found-exception.component';

describe('PageNotFoundExceptionComponent', () => {
  let component: PageNotFoundExceptionComponent;
  let fixture: ComponentFixture<PageNotFoundExceptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundExceptionComponent]
    });
    fixture = TestBed.createComponent(PageNotFoundExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
