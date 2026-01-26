// Creat node structure by class;

class Node {
    constructor(value){
        this.first = value;
        this.last = null;
    }
}

class NodeList {
    constructor(value){
        this.head = new Node(value);  // head: Node { first: 1, last: null },
        this.tail = this.head; //tail: Node { first: 1, last: null },
        this.length = 1 //length: 1
    }
    push(value){
        let newNode = new Node(value);
        this.tail.last = newNode; //head: Node { first: 1, last: Node { first: 2, last: null } },
        this.tail = newNode; //tail: Node { first: 2, last: null },
        this.length++  //length: 1
    }
    pop(){
        let present = this.head;
        let previous = this.head

        while(present.last){
            previous = present; 
            present = previous.last;
        }
    }
}

//Create NodeList class instinct 

const myNodeList = new NodeList(1);
console.log(myNodeList) 
myNodeList.push(2);
console.log(myNodeList)