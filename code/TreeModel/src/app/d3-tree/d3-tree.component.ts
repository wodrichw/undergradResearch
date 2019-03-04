import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { TreeModel } from './tree.model';
import { Observable } from 'rxjs';
import { Tree } from '../exclusionTree';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-d3-tree',
  template: `<div class="d3-chart" #chart></div>`,
  styleUrls: ['./d3-tree.component.css']
})
export class D3TreeComponent implements OnInit{
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private tree$: Observable<Tree>;
  @Output() expandNode = new EventEmitter();
  @Output() inspectNode = new EventEmitter();

  treeModel: TreeModel = new TreeModel(this.ts);
  treeData: Tree;

  constructor(private ts: TreeService) {
    this.expandTreeListener(d => this.ts.expandNode(d));
    this.inspectNodeListener(d => this.ts.inspectNode(d));
  }

  ngOnInit() {
    this.ts.getTree$().subscribe(t => {
      this.treeModel.createTreeData(t);
      if (this.treeData == null) {
        const element = this.chartContainer.nativeElement;
        element.innerHTML = '';
        this.treeModel.addSvgToContainer(this.chartContainer);
        this.treeModel.createLayout();
        this.treeModel.update();
      }
      this.treeModel.update();
      this.treeModel.setInspectedNode();
      this.treeData = t;
    });
    this.ts.getNode$().subscribe(n => {
      if (n == null) { return; }
      if (n.data.name !== this.treeModel.iNode.data.name) {
        this.treeModel.setInspectedNode(n);
      } else if (n.children == null) {
        const updatedN = this.treeModel.searchForNode({name: n.data.name, depth: n.depth});
        if (updatedN != null && updatedN.children != null ) {
          this.treeModel.setInspectedNode(updatedN);
        }
      }
    });
  }

  expandTreeListener(callable) {
    this.treeModel.expandTreeEvent = callable;
  }
  inspectNodeListener(callable) {
    this.treeModel.inspectNodeEvent = callable;
  }
}
