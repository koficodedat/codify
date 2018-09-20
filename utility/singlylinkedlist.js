function Node (val) {
  this.val = val;
  this.next = null;

  this.add = (val) => {
    let currentNode = this;
    while( currentNode.next ){
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(val);
  }

  this.size = () => {
    let size = 1;
    let currentNode = this;
    while( currentNode.next ){
      currentNode = currentNode.next;
      size++;
    }

    return size;
  }

  this.hasNext = () => {
    return this.next !== null;
  }

  this.setHeadToNext = () => {
    let currentNode = this;
    this.val = currentNode.next.val;
    this.next = currentNode.next.next;
  }

  this.toString = () => {
    let nodeToString = '';
    let currentNode = this;
    while( currentNode ){
      nodeToString += `${ currentNode.val }${ currentNode.next ? ' -> ' : ''}`;
      currentNode = currentNode.next;
    }

    return nodeToString;
  }

}

module.exports = Node;