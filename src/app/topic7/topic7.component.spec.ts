import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic7Component } from './topic7.component';

describe('Topic7Component', () => {
  let component: Topic7Component;
  let fixture: ComponentFixture<Topic7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
