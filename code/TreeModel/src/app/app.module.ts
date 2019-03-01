import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { D3TreeComponent } from './d3-tree/d3-tree.component';
import { InspectNodeComponent } from './inspect-node/inspect-node.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeService } from './tree.service';

@NgModule({
  declarations: [
    AppComponent,
    D3TreeComponent,
    InspectNodeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [ TreeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
