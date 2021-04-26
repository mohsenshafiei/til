## What is Redis? Why, When we should use Redis?

### What is Redis?

* In-memory key-structure database
* Five data structures + publish/subscribe (Strings, Lists, Sets, Hashes, Sorted Sets (Zsets))
* Persistence via snapshot or append-only file
* Replication Supported
  * master/slave (slave chains and trees)
* High availability and automated failover

### When to use Redis?

*Session Cache*

One of the most apparent use cases for Redis is using it as a session cache. The advantages of using Redis over other session stores, such as Memcached, is that Redis offers persistence

*Full Page Cache*

Outside of your basic session tokens, Redis provides a very easy FPC platform to operate in. Going back to consistency, even across restarts of Redis instances, with disk persistence your users won’t see a decrease in speed for their page loads

*Queues*

Taking advantage of Redis’ in memory storage engine to do list and set operations makes it an amazing platform to use for a message queue.

*Leaderboards/Counting*

Redis does an amazing job at increments and decrements since it’s in-memory.

*Pub/Sub*

Last (but certainly not least) is Redis’s Pub/Sub feature. The use cases for Pub/Sub are truly boundless. I’ve seen people use it for social network connections,