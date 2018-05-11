import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../state/reducers/counter.reducer';
import { CounterDisplayerComponent } from './counter-displayer/counter-displayer.component';
import { CounterIncrementerComponent } from './counter-incrementer/counter-incrementer.component';
import { CounterDecrementerComponent } from './counter-decrementer/counter-decrementer.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterDisplayerComponent,
    CounterIncrementerComponent,
    CounterDecrementerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter:counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
