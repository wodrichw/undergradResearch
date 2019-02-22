import { Component, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import { TreeModel } from './tree.model';

@Component({
  selector: 'app-d3-tree',
  template: `<div class="d3-chart" #chart></div>`,
  styleUrls: ['./d3-tree.component.css']
})
export class D3TreeComponent {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private treeData: any= [];
  @Output() onNodeSelected: EventEmitter<any>= new EventEmitter();

  treeModel: TreeModel = new TreeModel();

  constructor() {
    this.setNodeSelectedListener(d => this.onNodeSelected.emit(d));
  }

  createChart(chartContainer, treeData): void {
    const element = chartContainer.nativeElement;
    element.innerHTML = '';
    this.treeModel.addSvgToContainer(chartContainer);
    this.treeModel.createLayout();
    this.treeModel.createTreeData(treeData);
  }
  update() {
    this.treeModel.update(this.treeModel.root);
  }

  ngOnChanges(changes: any) {
    console.log('CHANGES:', changes);
    if (!!this.treeData) {
      this.createChart(this.chartContainer, this.treeData);
      this.update();
    }
  }

  setNodeSelectedListener(callable){
    this.treeModel.nodeselected = callable;
  }
}
