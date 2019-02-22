import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { D3TreeComponent } from './angular-d3-tree/d3-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    D3TreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
