/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root){

      let total = this.root.val

      function sumHelper(node) {
        for (let child of node.children) {
          total += child.val
          if (child.children.length > 0) sumHelper(child) 
        }
      }

      sumHelper(this.root)
      return total

    } else return 0
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root){

      let count = this.root.val % 2 === 0 ? 1 : 0

      function countEvensHelper(node) {
        for (let child of node.children) {
          if (child.val % 2 === 0) count++
          if (child.children.length > 0) countEvensHelper(child)
        }
      }
  
      countEvensHelper(this.root)
      return count
      
    } else return 0

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

    if (this.root){

      let count = this.root.val > lowerBound ? 1 : 0

      function countEvensHelper(node) {
        for (let child of node.children) {
          if (child.val > lowerBound) count++
          if (child.children.length > 0) countEvensHelper(child)
        }
      }

      countEvensHelper(this.root)
      return count
      
    } else return 0

  }
}

module.exports = { Tree, TreeNode };
