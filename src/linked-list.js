const Node = require('./node');

class LinkedList {
  constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
  }

  append(data) {
    let node = new Node(data);
    if(this.length === 0) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    this.length++;
    return this;
  }

  head() {
    if(this._head != null) {
      return this._head.data;
    } else {
      return null;
    }
  }

  tail() {
    if(this._tail != null) {
      return this._tail.data;
    } else {
      return null;
    }
  }

  at(index) {
    let currentNode = this._head;
    let count = 0;
    if(index < this.length) {
      while(count < index){
        currentNode = currentNode.next;
        count++;
      }
    }
    return currentNode.data;
  }

  insertAt(index, data) {
    let node = new Node(data);
    let currentNode = this._head;
    let prevNode;
    let count = 0;
    while(count < index) {
      currentNode = currentNode.next;
      count++;
    }
    if(currentNode != null) {
      prevNode = currentNode.prev;
      prevNode.next = node;
      currentNode.prev = node;
    } else {
      prevNode = null;
    }
    node.prev = prevNode;
    node.next = currentNode;
    this.length++;
    return this;
  }

  isEmpty() {
    return !this.length;
  }

  clear() {
    this.length = 0;
    this._head = null;
    this._tail = null;
    return this;
  }

  deleteAt(index) {
    let currentNode = this._head;
    let count = 0;
    while(count < index) {
      currentNode = currentNode.next;
      count++;
    }
    let prevNode = currentNode.prev;
    let nextNode = currentNode.next;
    if(prevNode != null){
      prevNode.next = nextNode;
    } else if(nextNode != null) {
      nextNode.prev = prevNode;
    }
    this.length--;
    return this;
  }

  reverse() {
    let currentNode = this._tail;
    currentNode.next = currentNode.prev;
    let currentHead = currentNode;
    let index = 0;
    while(index < this.length - 1) {
      currentNode = currentNode.next;
      let prev = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = prev;
      index++;
    }
    this._tail = currentNode;
    this._head = currentHead;
    return this;
  }

  indexOf(data) {
    let currentNode = this._head;
    let count = 0;
    while(count < this.length - 1 && data != currentNode.data) {
      currentNode = currentNode.next;
      count++;
    }
    if (data != currentNode.data){
      count = -1;
    }
    return count;
  }
}

module.exports = LinkedList;
