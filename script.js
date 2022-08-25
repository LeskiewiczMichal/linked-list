class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  tail() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.nextNode) {
        lastNode = lastNode.nextNode;
      }
    }
    return lastNode;
  }

  listHead() {
    return this.head;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    let tail = this.head;
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }
    tail.nextNode = newNode;
    return this.head;
  }

  prepend(value) {
    const newNode = new Node(value);
    let headNode = this.listHead();
    newNode.nextNode = this.head;
    this.head = newNode;
    return this.head;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter += 1;
      node = node.nextNode;
    }
    return counter;
  }

  at(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      if (node.nextNode !== null) {
        node = node.nextNode;
      } else {
        return null;
      }
    }
    return node;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (!this.head.nextNode) {
      this.head = null;
      return;
    }
    let prevNode = this.head;
    let currNode = this.head.nextNode;

    while (currNode.nextNode) {
      prevNode = currNode;
      currNode = currNode.nextNode;
    }
    prevNode.nextNode = null;
    return this.head;
  }

  contains(value) {
    let node = this.head;
    while (node) {
        if (node.value === value) {
            return true;
        }
        node = node.nextNode;
    } 
    return false;
  }

  find(value) {
    let node = this.head;
    while (node) {
        if(node.value === value) {
            return node;
        }
        node = node.nextNode;
    }
    return null
  }

  toString() {
    let string = '';
    let node = this.head;
    while (node) {
        string += node.value;
        string += ' -> '
        if(node.nextNode === null) {
            string += 'null'
        }
        node = node.nextNode;
    }
    return string;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    if (!this.head || index === 0) {
        this.head = newNode;
        return;
    }
    const previous = this.at(index - 1);
    newNode.nextNode = previous.nextNode;
    previous.nextNode = newNode;
  }

  removeAt(index) {
    if (!this.head) {
        return;
    }
    if (index === 0) {
        this.head = this.head.nextNode
    }
    const previous = this.at(index - 1);
    if(!previous || !previous.nextNode) {
        return
    }
    previous.nextNode = previous.nextNode.nextNode;
    return this.head;
  }
}

