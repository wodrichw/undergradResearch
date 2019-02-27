import { Component, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import { TreeModel } from './tree.model';
import { Observable } from 'rxjs';
import { Tree } from '../exclusionTree';

@Component({
  selector: 'app-d3-tree',
  template: `<div class="d3-chart" #chart></div>`,
  styleUrls: ['./d3-tree.component.css']
})
export class D3TreeComponent {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private tree$: Observable<Tree>;
  @Output() expandNode = new EventEmitter();
  @Output() inspectNode = new EventEmitter();

  treeModel: TreeModel = new TreeModel();
  treeData: Tree;

  constructor() {
    this.expandTreeListener(d => this.expandNode.emit(d));
    this.inspectNodeListener(d => this.inspectNode.emit(d));
  }

  ngOnChanges() {
    this.tree$.subscribe(t => {
      this.treeModel.createTreeData(t);
      if (this.treeData == null) {
        const element = this.chartContainer.nativeElement;
        element.innerHTML = '';
        this.treeModel.addSvgToContainer(this.chartContainer);
        this.treeModel.createLayout();
      }
      this.treeModel.update();
      this.treeData = t;
    });
  }

  expandTreeListener(callable) {
    this.treeModel.expandTree = callable;
  }
  inspectNodeListener(callable) {
    this.treeModel.inspectNode = callable;
  }
}
