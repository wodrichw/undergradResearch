import { Component, OnInit} from '@angular/core';
import { ExclusionTree } from './exclusionTree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tree = new ExclusionTree(5);
  title = 'TreeModel';
  data: any[];
  selectedNode: any;

  ngOnInit() {
    this.data = this.tree.d3Obj;
  }


  nodeUpdated(node) {
    console.log('app detected node change');
  }

  nodeSelected(node){
    console.log('app detected node selected', node);
    this.selectedNode = node;
  }
}
