import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { TreeService } from '../tree.service';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-macro',
  templateUrl: './macro.component.html',
  styleUrls: ['./macro.component.css']
})
export class MacroComponent implements OnInit{
  public macro = '';
  inspectedNode: any;
  awaitExpandNodeNameSubj = new BehaviorSubject<string>('');

  constructor(private ts: TreeService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/back.svg'));
    iconRegistry.addSvgIcon(
      'next',
      sanitizer.bypassSecurityTrustResourceUrl('assets/next.svg'));
   }
   ngOnInit() {
     const combined = combineLatest(this.ts.getNode$(), this.awaitExpandNodeNameSubj.asObservable());
     combined.subscribe(([node, name]) => {
        // Macro sought to reach node not yet expanded to in exclusion tree as well as d3-tree
        // Once expanded, then executed macro
        if (node.data.name === name) {  // expanded
          if (node.children != null) {
            this.inspectedNode = node;
            this.executeNext();
          }
        }
        this.inspectedNode = node;
     });
   }

  macroStringAdd(char) {
    this.macro += char;
  }
  macroStringBack() {
    this.macro = this.macro.slice(0, this.macro.length - 1);
  }
  smallMacro() {
    return this.macro === 'l' || this.macro === 'r';
  }

  executeNext() {
    if (this.smallMacro()) {
      this.smallMacroExecuteNext()
    }
  }
  smallMacroExecuteNext() {
    if (this.ts.expandNode(this.inspectedNode)) {
      this.awaitExpandNodeNameSubj.next(this.inspectedNode.data.name); // not working properly
    } else {
      if (this.inspectedNode.children.length === 1) {
        this.ts.inspectNode(this.inspectedNode.children[0]);
      } else if (this.inspectedNode.children.length === 2) {
        if (this.macro === 'l') {
          this.ts.inspectNode(this.inspectedNode.children[0]);
        } else if (this.macro === 'r') {
          this.ts.inspectNode(this.inspectedNode.children[1]);
        }
      }
    }
  }
  executeBack() {
    if (this.smallMacro()) {
      this.smallMacroExecuteBack();
    }
    return;
  }

  smallMacroExecuteBack() {
    if (this.inspectedNode.parent != null) {
      this.ts.inspectNode(this.inspectedNode.parent);
    }
  }
}
