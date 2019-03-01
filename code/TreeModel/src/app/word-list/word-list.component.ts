import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ExclusionTree, Tree } from '../exclusionTree';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  @Input() d3node: Observable<any>;
  exclusions: any[] = [];
  wordList: string[] = [];
  wordLen: number;

  constructor(private ts: TreeService) {}

  ngOnInit() {
    this.ts.getNode$().subscribe(n => {
      this.exclusions = this.ts.exTree.getExclusions(n);
      this.wordLen = n.depth + 2;
      this.wordList = [];
      this.makeWordList();
    });
  }
  makeWordList() {
    let words = ['0', '1'];
    let excIdx = 0;
    while (words.length >= 1) {
      for (let i = 0; i < words.length; i++) {
        // pop the smallest element of words
        const w = words.shift();

        // get index of exclusions such that all subsequent are smaller than p
        while (excIdx < this.exclusions.length && w.length >= this.exclusions[excIdx].length - 1) {
          excIdx++;
        }

        let validW0 = true;
        let validW1 = true;
        // test 0p0 and 1p1 with all exclusions smaller than 0p0 and 1p1
        for (let j = 0; j < excIdx; j ++) {
          // check the right of 0p0 and see if equal to exclusions[j]
          if ((w + '0').slice(-this.exclusions[j].length) === this.exclusions[j]) {
            validW0 = false;
          }
          // check the right of 1p1and see if equal to exclusions[j]
          if ((w + '1').slice(-this.exclusions[j].length) === this.exclusions[j]) {
            validW1 = false;
          }
        }
        if (validW0 && w.length + 1 === this.wordLen) {
          this.wordList.push(w + '0');
        }
        if (validW1 && w.length + 1 === this.wordLen) {
          this.wordList.push(w + '1');
        }
        if (validW0 && w.length + 1 < this.wordLen) {
          words.push(w + '0');
        }
        if (validW1 && w.length + 1 < this.wordLen) {
          words.push(w + '1');
        }
      }
    }
  }
}
