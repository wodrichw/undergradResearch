import { Component, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import { D3TreeService } from './d3-tree.service';

@Component({
  selector: 'app-d3-tree',
  template: `<div class="d3-chart" #chart></div>`,
  styleUrls: ['./d3-tree.component.css']
})
export class D3TreeComponent {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private treeData: any= [];
  // @Output() onNodeChanged: EventEmitter<any> = new EventEmitter();
  // @Output() onNodeSelected: EventEmitter<any> = new EventEmitter();

  constructor( private treeService: D3TreeService ) {
    // treeService.setNodeChangedListener((node) => {
    //   this.onNodeChanged.emit(node);
    // });
    // treeService.setNodeSelectedListener((node) => {
    //   this.onNodeSelected.emit(node);
    // });
  }

  ngOnChanges(changes: any) {
    if (!!this.treeData) {
      this.treeService.createChart(this.chartContainer, this.treeData);
      this.treeService.update();
    }
  }
}
