import { Injectable } from '@angular/core';
import { ExclusionTree, Tree } from './exclusionTree';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  exTree = new ExclusionTree();
  treeSubj =  new BehaviorSubject<Tree>(this.exTree.root);
  iNodeSubj = new BehaviorSubject<any>(null);

  setINodeSubj(n) { // set in d3-tree/tree.model.ts
    this.iNodeSubj = new BehaviorSubject<any>(n);
  }

  expandNode(d3node): boolean {
    let expanded = false;
    if (d3node.children == null) {
      expanded = true;
      this.exTree.expandTree(d3node);
      this.treeSubj.next(this.exTree.root);
      if (d3node.data.name === this.iNodeSubj.value.data.name) {
        this.inspectNode(d3node);
      }
    }
    return expanded;
  }
  inspectNode(d3Node) {
    this.iNodeSubj.next(d3Node);
  }
  getNode$() {
    if (this.iNodeSubj != null) {
      return this.iNodeSubj.asObservable();
    }
  }
  getTree$() {
    return this.treeSubj.asObservable();
  }
}
