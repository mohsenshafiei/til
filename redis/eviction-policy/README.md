### What is Redis: Eviction Policy

- Since Redis stores data in-memory, it is possible that it may give an out of memory error if the memory gets full.

- If maxmemory is not defined, Redis will throw an out-of-memory error once the heap is full.

- If maxmemory is defined but the eviction policy is set to noeviction, the Redis server will stop taking any writes once the memory is full. It will still respond to get queries.

- If some other eviction policy is defined, the keys will be evicted based on the policy.

- If slaves are connected to the master, then the memory is needed by the buffer(used for storing bytes to be sent to the slave) as well. The memory defined in the maxmemory property does not include that. So while defining maxmemory, please keep in mind the memory needed for buffers.

### Eviction policies in Redis

We can define the eviction policy that will be used by the Redis server in case the memory is full using the maxmemory-policy property in the redis.conf file.

maxmemory <bytes>
maxmemory-policy <policy>

### Policies:

- *noeviction*: As the name suggests, no keys are evicted if the memory is full. If the client tries to insert more data, an error is returned.

- *allkeys-lru*: Evicts the least recently used key. If there are two keys, key1, which was last used five minutes ago, and key2, which was last used six minutes ago, then key2 will be evicted.

- *allkeys-lfu*: Evicts the least frequently used key. If there are two keys, key1, which was used 12 times since its creation, and key2, which was used 15 times since its creation, then key1 will be evicted.

- *allkeys-random*: Evicts the key randomly.

- *volatile-lru*: The term volatile is used for those keys for which an expiry time is set. This policy will evict the least recently used keys out of all the keys with an “expire” field set.

- *volatile-lfu*: This policy will evict the least frequently used keys out of all the keys with an “expire” field set.

- *volatile-ttl*: This policy will evict the least recently used keys with the shortest time to live out of all the keys with an “expire” field set.

- *volatile-random*: Evicts the key randomly out of all the keys marked to be expired.


### How are LRU keys determined?

The Least Recently Used and Time To Live algorithm are approximate algorithms for the purpose of saving memory. *Redis randomly selects five keys from all the keys and evicts the LRU key out of these five keys*. We can increase or decrease this sample size using the maxmemory-samples property in the redis.conf file. If we increase the sample size, then the LRU key found will be more accurate but will take more bandwidth. If it is decreased too much, then the key evicted is less effective but more efficient.