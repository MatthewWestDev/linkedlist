class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    let node = new Node(value);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
    this.size++;
  }
  prepend(value) {
    let node = new Node(value);
    node.nextNode = this.head;
    this.head = node;
    this.size++;
  }
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index.");
    } else {
      let node = new Node(value);
      let current, previous;
      current = this.head;
      // first index
      if (index == 0) {
        node.nextNode = this.head;
        this.head = node;
      } else {
        current = this.head;
        let iteration = 0;
        while (iteration < index) {
          iteration++;
          previous = current;
          current = current.nextNode;
        }
        node.nextNode = current;
        previous.nextNode = node;
      }
      this.size++;
    }
  }
  at(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Please enter a valid index");
    } else {
      let current,
        previous,
        iteration = 0;
      current = this.head;
      previous = current;
      while (iteration < index) {
        iteration++;
        previous = current;
        current = current.nextNode;
      }
      return current.value;
    }
  }
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  // find(value) returns index of node or null
  find(value) {
    let current = this.head;
    let iteration = 0;
    while (current !== null) {
      if (current.value === value) {
        return iteration;
      }
      current = current.nextNode;
      iteration++;
    }
    return null;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Please enter a valid index.");
    } else {
      let current,
        previous,
        iteration = 0;
      current = this.head;
      previous = current;
      if (index === 0) {
        this.head = current.nextNode;
      } else {
        while (iteration < index) {
          iteration++;
          previous = current;
          current = current.nextNode;
        }
        previous.nextNode = current.nextNode;
      }
      this.size--;
      return current.value;
    }
  }
  pop() {
    if (this.head === null) {
      return console.log("The list is empty.");
    } else {
      let current = this.head;
      let previous;
      while (current.nextNode !== null) {
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = null;
      this.size--;
      return current.value;
    }
  }
  toString() {
    let current = this.head;
    let string = "";
    while (current !== null) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    string += "null";
    return string;
  }
}
export { LinkedList };
