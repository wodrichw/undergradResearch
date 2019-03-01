import { Injectable } from '@angular/core';
import { ExclusionTree, Tree } from './exclusionTree';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  exTree = new ExclusionTree();
  treeSubj =  new BehaviorSubject<Tree>(this.exTree.root);
  iNode: any;
  iNodeSubj = new Subject<any>();

  expandNode(d3node) {
    if (d3node.data.children == null) {
      this.exTree.expandTree(d3node);
      this.treeSubj.next(this.exTree.root);
    }
  }
  inspectNode(d3Node) {
    this.iNodeSubj.next(d3Node);
  }
  getNode$() {
    return this.iNodeSubj.asObservable();
  }
  getTree$() {
    return this.treeSubj.asObservable();
  }
}
