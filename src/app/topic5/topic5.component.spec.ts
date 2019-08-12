import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic5Component } from './topic5.component';

describe('Topic5Component', () => {
  let component: Topic5Component;
  let fixture: ComponentFixture<Topic5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
