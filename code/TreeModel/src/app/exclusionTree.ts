export type Tree = { name: string, children: Tree[] };
export class ExclusionTree {
    public root: Tree = {name: '11', children: [{name: '000', children: null}, {name: '101', children: null}]};

    expandTree(d3Node) {
        const exclusions = this.getExclusions(d3Node);
        // find node to expand
        let n = this.root;
        for (let e of exclusions.slice(1)) {
            if (n.children[0].name === e) {
                n = n.children[0];
            } else if (n.children[1].name === e) {
                n = n.children[1];
            }
        }
        // get children of d3Node
        const cNames = this.findExclusionChildren(exclusions);
        let len = n.name.length;
        // place in filler nodes between exclusions
        while (len < cNames[0].length - 1) {
            n.children = [{name: '', children: null}];
            n = n.children[0];
            len++;
        }
        n.children = [{name: cNames[0], children: null}, {name: cNames[1], children: null}];

    }

    getExclusions(n): string[] {
        if (n == null) {
            return [];
        }
        const e = this.getExclusions(n.parent);
        e.push(n.data.name);
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
