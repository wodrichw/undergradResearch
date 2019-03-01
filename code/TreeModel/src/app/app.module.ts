import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { D3TreeComponent } from './d3-tree/d3-tree.component';
import { InspectNodeComponent } from './inspect-node/inspect-node.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeService } from './tree.service';
import { MacroComponent } from './macro/macro.component';

@NgModule({
  declarations: [
    AppComponent,
    D3TreeComponent,
    InspectNodeComponent,
    MacroComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ TreeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
