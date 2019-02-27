import { Component, OnInit} from '@angular/core';
import { ExclusionTree, Tree } from './exclusionTree';
import { Subject, Observable } from 'rxjs';
import {delay} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tree: ExclusionTree;
  title = 'TreeModel';
  treeSubj = new Subject<Tree>();
  tree$: Observable<Tree>;
  iNodeSubj = new Subject<any>();
  iNode$: Observable<any>;

  ngOnInit() {
    this.tree = new ExclusionTree();
    this.tree$ = this.treeSubj.asObservable();
    this.iNode$ = this.iNodeSubj.asObservable();

    // Delayed so that tree.root is passed correctly to d3-component
    setTimeout(() => this.treeSubj.next(this.tree.root), 0);
  }

  expandNode(d3node) {
    if (d3node.data.children == null) {
      this.tree.expandTree(d3node);
      this.treeSubj.next(this.tree.root);
    }
  }
  inspectNode(d3Node) {
    this.iNodeSubj.next(d3Node);
  }
}
