import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplpComponent } from './complp.component';

describe('ComplpComponent', () => {
  let component: ComplpComponent;
  let fixture: ComponentFixture<ComplpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
