class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    console.log(this.map);
    return val;
  }

  put(key, value) {
    this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
      const firstItem = this.map.keys().next().value;
      this.map.delete(firstItem);
    }
    console.log(this.map);
  }
}

const cache = new LRUCache(3);
cache.put(1, 1);
cache.put(2, 2);
cache.get(2);
cache.put(3, 3);
cache.put(4, 4);
