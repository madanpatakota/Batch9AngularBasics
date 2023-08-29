import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBindingComponent } from './ng-binding.component';

describe('NgBindingComponent', () => {
  let component: NgBindingComponent;
  let fixture: ComponentFixture<NgBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgBindingComponent]
    });
    fixture = TestBed.createComponent(NgBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
