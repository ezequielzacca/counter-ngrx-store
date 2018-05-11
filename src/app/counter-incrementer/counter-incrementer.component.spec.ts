import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterIncrementerComponent } from './counter-incrementer.component';

describe('CounterIncrementerComponent', () => {
  let component: CounterIncrementerComponent;
  let fixture: ComponentFixture<CounterIncrementerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterIncrementerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterIncrementerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
