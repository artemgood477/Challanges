/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Map to store key-value pairs
    this.queue = []; // Queue to maintain the order of keys (LRU strategy)
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        // If key exists in the cache, update its position in the queue (move to the end)
        this.updateQueue(key);
        return this.cache.get(key);
    } else {
        return -1; // Key not found
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        // If key exists, update its value and move it to the end of the queue
        this.cache.set(key, value);
        this.updateQueue(key);
    } else {
        // If key doesn't exist
        if (this.cache.size >= this.capacity) {
            // If cache is full, remove the least recently used item (front of the queue)
            const oldestKey = this.queue.shift();
            this.cache.delete(oldestKey);
        }
        // Add the new key-value pair to the cache and queue
        this.cache.set(key, value);
        this.queue.push(key);
    }
};

/**
 * Helper function to update the queue when accessing or updating a key
 * @param {number} key 
 */
LRUCache.prototype.updateQueue = function(key) {
    // Remove key from current position in queue and add it to the end
    const index = this.queue.indexOf(key);
    if (index !== -1) {
        this.queue.splice(index, 1); // Remove key from current position
        this.queue.push(key); // Add key to the end of the queue
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
