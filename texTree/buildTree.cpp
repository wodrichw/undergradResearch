#include <stdlib.h>
#include <stdio.h>
#include <vector>
#include <string>

using namespace std;

struct Node
{
    string words;
    vector<Node> children;
    Node* parent;
    vector<string> exclusions;
    string id;
};

Node* build_word_list_tree(Node* n, int current_depth, int max_depth)
{

}

int main(int argc, char* argv[])
{
    printf("ARGC %d\n", argc);
    return 0;
}