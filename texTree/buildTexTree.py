class WordListNode:
    def __init__(self, parent=None, exclusion=None, words=None, children=[]):
        self.words = words
        self.children = children
        self.exclusion = exclusion
        self.parent = parent

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

def buildTexTreeString(n):
    if n == None: return ""
    texWordList = []
    for w in n.words:
        cells = ["\\cellcolor{blue!15}"+c if c == '0' else "\\cellcolor{black}\\color{white}"+c for c in w]
        texWordList.append('&'.join(cells) + "\\\\\n")
    texWordList = ' '.join(texWordList)[:-3]
    nodeContent = "$\\begin{tabular} {"+'l'*len(n.words[0])+"} \n"+texWordList+"\n\\end{tabular}$\n"
        
    if len(n.children) == 1:
        childString = buildTexTreeString(n.children[0])
        treeString = "["+nodeContent+childString+"]\n"
    else:
        childStringL = buildTexTreeString(n.children[0])
        childStringR = buildTexTreeString(n.children[1])
        treeString = "["+nodeContent+childStringL+childStringR+"]\n"
    return treeString

    
    

n = buildWordListTree(WordListNode(words=['0', '1']), 0, 11)
print(buildTexTreeString(n))
