import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { IAppState } from "../state/app.state";
import { Store, select } from "@ngrx/store";
import { INCREMENT, DECREMENT } from "../state/reducers/counter.reducer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  counter: Observable<number>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      console.log("-------------");
      console.log("NEW STATE");
      console.log(state);
    });
    this.counter = this.store.pipe(select(state => state.counter));
  }

  incrementar() {
    /*console.log("--------------");
    console.log("ACTION DISPATCHED");
    console.log({ type: INCREMENT });*/
    this.store.dispatch({ type: INCREMENT });
  }
  decrementar() {
    /*console.log("--------------");
    console.log("ACTION DISPATCHED");
    console.log({ type: DECREMENT });*/
    this.store.dispatch({ type: DECREMENT });
  }
}
