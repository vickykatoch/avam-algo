// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const nodes = [root,'s'];
    const widths = [0];
    while(nodes.length>1) {
        const node = nodes.shift();
        if(node==='s') {
            widths.push(0);
            nodes.push('s');
        } else {
            widths[widths.length-1]++;
            nodes.push(...node.children);
        }
    }
    return widths;
}


module.exports = levelWidth;
