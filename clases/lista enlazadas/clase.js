// List => { head: null, size: 0}
// Nodo => { data: 8, next: null }

// { head: { data: 8, next: null }, size: 0 }
//                      ^

// let myList = { head: null, size: 0};
// myList.head = { data: 8, next: null };
// myList.head.next = { data: 5, next: null };

function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

// List => { head: null, size: 0}
LinkedList.prototype.add = function(data) {
  let newNode = new Node(data); // Nodo => { data: 8, next: null }
  let current = this.head;
  if(!current) {
      this.head = newNode;
  } else {
      while(current.next) {
          current = current.next;
      }
      current.next = newNode;
  }
  this.size++;
}

// LinkedList { head: Node { data: 8, next: Node { data: 5, next: { data: 3, next: null } } },
//   size: 4
// }

// LinkedList { head: Node { data: 8, next: null } }
//        current ^                     ^c.next          ^c.next.next

LinkedList.prototype.remove = function() {
  if(!this.head) {
      return null;
  } else if(!this.head.next) {
      let aux = this.head.node.value;
      this.head = null;
      this.size--;
      return aux;
  } else {
      let current = this.head;
      while(current.next.next) {
          current = current.next;
      }
      let aux = current.value;
      current.next = null;
      this.size--;
      return aux;
  };
}

LinkedList.prototype.removeData = function(data) {
    let current = this.head;
    let previous = null;
    while(current) {
      if(current.data === data) {
          if(!previous) {
              this.head = current.next;
          } else {
              previous.next = current.next;
          }
          this.size--;
          return current.data;
      }
      previous = current;
      current = current.next;
  }
  return null;
}

// Ejercicios propuestos
LinkedList.prototype.removeHead = function() {}
LinkedList.prototype.insertAt = function(data, index) {}
LinkedList.prototype.getSize = function() {}

let myList = new LinkedList();
myList.add(8);
myList.add(5);
myList.add(3);
myList.add(1);
myList.removeData(3);
myList.insertAt(1, 10);
console.log(myList);
console.log(myList.remove())



function a (nodeValue) {
    return nodeValue === 'two';
  }

  let b = a()
  console.log(a('two'))