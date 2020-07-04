class Queue {

    //A Queue is defined which follows FIRST IN FIRST OUT 
    constructor() {
        this.queue = [];
        this.length = 0;
    }

    // To Add an element in the Queue
    enqueue(val) {
        this.queue.unshift(val);
        this.length++;
    }

    // To remove an element from the Queue
    dequeue(val) {
        if (this.length > 0) {
            this.queue.pop();
            this.length--;
        }
    }

    //To check last entered element in the queue
    peek(val) {
        const lastValIndex = this.length - 1;
        if (lastValIndex >= 0) {
            return this.queue[lastValIndex];
        }
        return false;
    }
}