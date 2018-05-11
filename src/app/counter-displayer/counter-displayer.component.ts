import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-counter-displayer",
  templateUrl: "./counter-displayer.component.html",
  styleUrls: ["./counter-displayer.component.css"]
})
export class CounterDisplayerComponent implements OnInit {
  @Input() counterValue: number = 0;
  constructor() {}

  ngOnInit() {}
}
