import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TabComponent } from './tab/tab.component';
import { CompComponent } from './comp/comp.component';
import { ComplpComponent } from './complp/complp.component';
import { Partie2Component } from './partie2/partie2.component';
import { Ex3Component } from './ex3/ex3.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TabComponent,
    CompComponent,
    ComplpComponent,
    Partie2Component,
    Ex3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
