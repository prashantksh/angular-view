import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic6Component } from './topic6.component';

describe('Topic6Component', () => {
  let component: Topic6Component;
  let fixture: ComponentFixture<Topic6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
