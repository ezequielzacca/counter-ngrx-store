import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDisplayerComponent } from './counter-displayer.component';

describe('CounterDisplayerComponent', () => {
  let component: CounterDisplayerComponent;
  let fixture: ComponentFixture<CounterDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
