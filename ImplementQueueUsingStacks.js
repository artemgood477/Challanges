/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = []; // main stack for enqueue operation
    this.stack2 = []; // auxiliary stack for dequeue operation
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // Push element x onto stack1
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // Ensure stack2 has elements before popping
    if (this.stack2.length === 0) {
        this.transferStacks();
    }
    // Pop from stack2 to perform dequeue operation
    return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // Ensure stack2 has elements before peeking
    if (this.stack2.length === 0) {
        this.transferStacks();
    }
    // Peek at the top element of stack2 without popping
    return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // Check if both stacks are empty to determine if queue is empty
    return this.stack1.length === 0 && this.stack2.length === 0;
};

/**
 * Helper function to transfer elements from stack1 to stack2
 */
MyQueue.prototype.transferStacks = function() {
    // Transfer all elements from stack1 to stack2 to simulate dequeue order
    while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
    }
};
