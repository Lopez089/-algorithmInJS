class Node{
	value: number;
	next : any;
	prev:any

	constructor(value: number){

		this.value = value;
	   	this.next = null;
	   	this.prev = null;
	}
}


class DoublyLinkedList{
	head: any;
	size: number;
	tail: any;
	
	constructor(){
		this.head = null
		this.size = 0
		this.tail = null // cola
	}
	
	// add element at the end of the list
	append(value:number){
		let newNode = new Node(value)
		if(this.head === null){
			this.head = newNode
			this.tail = this.head
		}else{
			newNode.prev = this.tail
			this.tail.next = newNode
			this.tail = newNode
		}
		this.size++
		return this
	}

	// to add element at specified index
	



	////////////////////// me he adelantado 


	// to display link list data in array
	printValue(){
		let output:number[] = []
		let currentNode = this.head
		while(currentNode){
			output.push(currentNode.value)
			currentNode = currentNode.next
		}
		return output
	}

}

export default DoublyLinkedList