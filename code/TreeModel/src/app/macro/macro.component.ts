import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-macro',
  templateUrl: './macro.component.html',
  styleUrls: ['./macro.component.css']
})
export class MacroComponent {
  public macro: string = '';

  constructor(private ts: TreeService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/back.svg'));
    iconRegistry.addSvgIcon(
      'next',
      sanitizer.bypassSecurityTrustResourceUrl('assets/next.svg'));
   }

  macroStringAdd(char) {
    this.macro += char;
  }
  macroStringBack() {
    this.macro = this.macro.slice(0, this.macro.length - 1);
  }
}
