import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-counter-decrementer",
  templateUrl: "./counter-decrementer.component.html",
  styleUrls: ["./counter-decrementer.component.css"]
})
export class CounterDecrementerComponent implements OnInit {
  @Output() onDecrement = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  triggerDecrement() {
    this.onDecrement.emit();
  }
}
