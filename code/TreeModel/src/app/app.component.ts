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

  nodeSelected(node){
    console.log(node)
  }
}
