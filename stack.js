class Stack {

    // A stack defined which follows LAST IN FIRST OUT principle
    constructor() {
        this._storage = {};
        this._length = 0;
    }

    // To push an item to the stack
    push(val) {
        this._storage[this._length] = val; 
        this._length++;
    }

    // To pop and item from the stack
    pop(val) {
        const lastValIndex = this._length - 1;
        if (lastValIndex >= 0) {
            const lastVal = this._storage[lastValIndex];
            delete this._storage[lastValIndex];
            this._length--;
            return lastVal;
        }
        return false;
    }

    // Look at the last added value to the stack
    peek(val) {
        const lastValIndex = this._length - 2;
        const lastVal = this._storage[lastValIndex];
        return lastVal;
    }

}