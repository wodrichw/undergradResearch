class Node {
    public parent: Node;
    public left: Node;
    public right: Node;
    public exclusion: string;
    constructor(e: string, p: Node = null, l: Node = null, r: Node = null) {
        this.exclusion = e;
        this.left = l;
        this.right = r;
        this.parent = p;
    }
}

export class ExclusionTree {
    public root: Node;
    public d3Obj = [{ id: '1', description: '11' }];
    constructor(depth: number) {
        const bt = this.buildTree(new Node('11'), 0, depth, 1);
        this.root = bt.node;
        this.d3Obj = bt.d3Obj;
    }

    buildTree(n: Node, currentDepth, maxDepth, idx: number): {node: Node, d3Obj: any} {
        if (currentDepth === maxDepth) {
            return {node: null, d3Obj: []};
        }
        const exclusions = this.getExclusions(n);
        const children = this.findExclusionChildren(exclusions);
        const btLeft = this.buildTree(new Node (children[0], n), currentDepth + 1, maxDepth, idx * 2);
        const btRight = this.buildTree(new Node (children[1], n), currentDepth + 1, maxDepth, idx * 2 + 1);
        n.left = btLeft.node;
        n.right = btRight.node;
        const d3Obj = {name: n.exclusion, children: [btLeft.d3Obj, btRight.d3Obj]};
        return {node: n, d3Obj};
    }

    // returns a list of all parent exclusions in order of smallest to largest
    getExclusions(n: Node): string[] {
        if (n == null) {
            return [];
        }
        const e = this.getExclusions(n.parent);
        e.push(n.exclusion);
        return e;
    }
    // Finds the next larges pair of palindrome
    // such that all palindrome in exclusions
    // are not subwords in either palindromes in the pair
    findExclusionChildren(exclusions: string[]): string[] {
        const pallens: string[] = ['', '0', '1'];
        let children: string[] =  null;
        let excIdx = 0;
        while (children === null ) {
            for (let i = 0; i < pallens.length; i++) {
                // pop the smallest element of p
                const p = pallens.shift();

                let valid0p0 = true;
                let valid1p1 = true;

                // get index of exclusions such that all subsequent are smaller than p
                while (excIdx < exclusions.length && p.length >= exclusions[excIdx].length - 2) {
                    excIdx++;
                }
                // test 0p0 and 1p1 with all exclusions smaller than 0p0 and 1p1
                for (let j = 0; j < excIdx; j ++) {
                    // check the right of 0p0 and see if equal to exclusions[j]
                    if (('0' + p + '0').slice(-exclusions[j].length) === exclusions[j]) {
                        valid0p0 = false;
                    }
                    // check the right of 1p1and see if equal to exclusions[j]
                    if (('1' + p + '1').slice(-exclusions[j].length) === exclusions[j]) {
                        valid1p1 = false;
                    }
                }

                if (valid0p0 && valid1p1 && exclusions[exclusions.length - 1].length < p.length + 2) {
                    children = ['0' + p + '0', '1' + p + '1'];
                    break;
                } else if (valid0p0 && valid1p1) {
                    pallens.push('0' + p + '0');
                    pallens.push('1' + p + '1');
                } else if (valid0p0) {
                    pallens.push('0' + p + '0');
                } else if (valid1p1) {
                    pallens.push('1' + p + '1');
                }
            }
        }
        return children;
    }
}
