var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // Push element x onto queue2
    this.queue2.push(x);
    
    // Move all elements from queue1 to queue2
    while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
    }
    
    // Swap queue1 and queue2
    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // Pop the top element from queue1 (which simulates the stack)
    return this.queue1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    // Return the front element of queue1 (which simulates the stack)
    return this.queue1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    // Check if queue1 is empty to determine if stack is empty
    return this.queue1.length === 0;
};
