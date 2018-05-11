import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDecrementerComponent } from './counter-decrementer.component';

describe('CounterDecrementerComponent', () => {
  let component: CounterDecrementerComponent;
  let fixture: ComponentFixture<CounterDecrementerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDecrementerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDecrementerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
