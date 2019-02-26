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
  @Output() onNodeSelected = new EventEmitter();

  treeModel: TreeModel = new TreeModel();
  treeData: Tree;

  constructor() {
    this.setNodeSelectedListener(d => this.onNodeSelected.emit(d));
  }

  ngOnChanges(changes: any) {
    this.tree$.subscribe(t => {
      this.treeModel.createTreeData(t);
      if (this.treeData == null) {
        const element = this.chartContainer.nativeElement;
        element.innerHTML = '';
        this.treeModel.addSvgToContainer(this.chartContainer);
        this.treeModel.createLayout();
      }
      this.treeModel.update(t);
      this.treeData = t;
    });
  }

  setNodeSelectedListener(callable) {
    this.treeModel.nodeselected = callable;
  }
}
