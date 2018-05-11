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
  counter: number = 0;

  constructor(private store: Store<IAppState>) {}
  
  ngOnInit() {}

  incrementar() {
    this.counter += 1;
  }
  decrementar() {
    this.counter -= 1;
  }
}

/**
 *
 * STATE -> is a normal javascript object
 * ACTION-> javascript object with 2 properties
 *                  TYPE: Identifies the action
 *                  PAYLOAD: Aditional data neede to fulfill the ACTION
 *
 * REDUX PRINCIPLES:
 * 1) Either if your app is very simple or very complex with a lot of UI and Data, the state of the app is represented by a Javascript Object
 * 2) The state is READONLY, the only way to get a new state is by dispatching ACTIONS
 * 3 and last) To describe state mutations, u have to write a FUNCTION that
 *   takes the current state and an action as parameter and returns the next state, that function is called a reducer
 */
