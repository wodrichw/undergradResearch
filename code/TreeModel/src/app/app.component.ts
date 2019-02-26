import { Component, OnInit} from '@angular/core';
import { ExclusionTree, Tree } from './exclusionTree';
import { Subject, Observable } from 'rxjs';

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

  ngOnInit() {
    this.tree = new ExclusionTree();
    this.tree$ = this.treeSubj.asObservable();

    // Delayed so that tree.root is passed correctly to d3-component
    const delay = () => this.treeSubj.next(this.tree.root);
    setTimeout(delay, 0);
  }

  nodeSelected(d3node) {
    if (d3node.data.children == null) {
      this.tree.expandTree(d3node);
      this.treeSubj.next(this.tree.root);
    }
  }
}
