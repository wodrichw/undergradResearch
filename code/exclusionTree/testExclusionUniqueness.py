
f = open("levelOrderExclusionTreeTraversal.txt", "r")


with open("levelOrderExclusionTreeTraversal.txt") as f:
    exclusions = f.readlines()

exclusions = [x.strip() for x in exclusions]

for i, e1 in enumerate(exclusions):
    for e2 in exclusions[i+1:]:
        assert e1 != e2, str(e1) + " has a copy"
