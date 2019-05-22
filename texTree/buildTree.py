import graphviz
import uuid
import sys

class WordListNode:
    def __init__(self, parent=None, exclusion=None, words=None, children=[]):
        self.words = words
        self.children = children
        self.exclusion = exclusion
        self.parent = parent
        self.id = uuid.uuid4().hex

def buildWordListTree(n, currentDepth, maxDepth):
    def getExclusions(n):
        if n == None: return []
        exclusions = list(set([n.exclusion] + getExclusions(n.parent)))
        return exclusions if exclusions != [None] else []

    if currentDepth == maxDepth: return None
    exclusions = getExclusions(n)
    fullChildren = []
    for w in n.words:
        fullChildren.append(w+'0')
        fullChildren.append(w+'1')
    
    balancedFullChildren = []
    for w in fullChildren:
        balancedW = True
        for e in exclusions:
            if e in w:
                balancedW = False
                break
        if balancedW: balancedFullChildren.append(w)

    heightTop = 0
    for c in balancedFullChildren[0]:
        heightTop += int(c)

    heightBottom = 0
    for c in balancedFullChildren[-1]:
        heightBottom += int(c)

    if heightBottom - heightTop == 2:
        leftE = balancedFullChildren[-1]
        rightE = balancedFullChildren[0]
        leftW = balancedFullChildren[:-1]
        rightW = balancedFullChildren[1:]

        childLeftN = buildWordListTree(WordListNode(n, leftE, leftW), currentDepth+1, maxDepth)
        childRightN = buildWordListTree(WordListNode(n, rightE, rightW), currentDepth+1, maxDepth)
        n.children = [childLeftN, childRightN]
    
    else:
        child = WordListNode(n, n.exclusion, balancedFullChildren)
        child = buildWordListTree(child, currentDepth+1, maxDepth)
        n.children = [child]
        
    return n

def buildTable(n):
    if n == None: return ""
    rows = []
    for w in n.words:
        cells = ["\t\t<TD BGCOLOR=\""+("blue" if c == "0" else "red")+"\">"+c+"</TD>" for c in w]
        rows.append("\t<TR>\n"+"\n".join(cells)+"\n\t</TR>")
    return "<<TABLE BORDER=\"0\" CELLBORDER=\"1\" CELLSPACING=\"0\">\n" + "\n".join(rows) + "\n</TABLE>>"

def buildGraph(n, graph):
    if n == None: return
    red = "0x{:02x}".format(int(float(sum([1 for c in n.words[0] if c == "0"]))/ len(n.words[0]) * 255))[2:]
    blue = "0x{:02x}".format(int(float(sum([1 for c in n.words[0] if c == "1"]))/ len(n.words[0]) * 255))[2:]
    graph.node(n.id, "", width=str(0.1 * len(n.words[0])), height=str(0.1*len(n.words)), style='filled', fillcolor="#"+red+"00"+blue)
    if n.parent: graph.edge(n.parent.id, n.id)
    for c in n.children:
        buildGraph(c, graph)

    
if __name__ == "__main__":
    if len(sys.argv) == 2: size = int(sys.argv[1])
    else: size = 5

    tree = buildWordListTree(WordListNode(words=["0","1"]), 0, size)
    s = graphviz.Digraph(uuid.uuid4().hex, node_attr={'shape': 'box'}, format="jpeg")
    buildGraph(tree, s)
    # s.view()
    s.render("output/tree"+str(size))
