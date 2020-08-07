

class Queue {
	data: number[]
	rear:number
	size:number
	
	constructor(){
		this.data=[];
		this.rear=0;
		this.size= 10
	}

	enqueue(element: number){
		if(this.rear < this.size){
			this.data[this.rear] = element
			this.rear = this.rear +1
		}else{
			console.log('limit size 10')
		}
	}
	length(){
		return this.rear
	}
	isEmpty(){
		return this.rear === 0
	}
	getFront(){
		if(this.isEmpty() === false){
			return this.data[0]
		}
	}
	dequeue(){
		if(this.isEmpty() === false){
			this.rear = this.rear -1
			return this.data.shift()

		}
	}
	print(){
	this.data.map((element:Number) => {
			console.log(element)
		});
	}
	clear(){
		this.data.length = 0
		this.rear = 0
	}
}

export default Queue