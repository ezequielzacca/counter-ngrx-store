import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-incrementer',
  templateUrl: './counter-incrementer.component.html',
  styleUrls: ['./counter-incrementer.component.css']
})
export class CounterIncrementerComponent implements OnInit {

  @Output() onIncrement = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  triggerDecrement() {
    this.onIncrement.emit();
  }

}
