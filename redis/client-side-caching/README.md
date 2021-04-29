### What is Client Side Caching?

- When the client requires data, they ask the Redis server to provide the data. Each back and forth from the server results in some bandwidth consumption, and it takes some time to get the result. It is possible to cache the result of the most frequently used keys on the client side. This drastically improves the performance of the application, as it does not need to send requests to the database.

### Challenges

The biggest challenge faced in caching the data on the client side is how to invalidate the data.

There are different approaches for cache invalidation that we will review together:

- A TTl (time to live) can be set for each key that is cached on the client side
  - If the application is data sensitive and data is changing frequently, then this technique is not useful.
- Another method is to use PUB/SUB model of redis to send invalidate messages to the client
  - The problem with this approach is that the server will need to send the message to all clients every time a key is changed, which can be very costly from the bandwidth point of view.

### Client Side Caching In Redis


##### Default mode

- In the first approach, the server stores the information regarding which key is stored by which client.

- By doing this, if a key is changed, the server sends the message to only those clients who have cached that key. Although this saves a lot of bandwidth, it consumes some memory on the server side.

Here are some steps for this approach:

- The client sends a read request to the server.
- The server checks if this client has enabled tracking. If yes, then the server maintains the record of the key that this client requested in a table called the Invalidation Table.
- When the key is changed or expires, the server sends the invalidate message to all clients that have requested this key.
- There is a limit to the number of records the table can maintain. If the table is full, the server deletes some mapping and sends an invalidation message to the clients.

##### Broadcasting Approach

The clients subscribe to key prefixes and will receive a notification message every time a key matching such prefix is touched. If the client does not specify any prefix, the invalidation message is received for each and every key.

Here are the steps to this approach:

- The client enables the broadcasting mode using the BCAST option.
- The server uses a Prefixes Table, where each prefix is associated with a list of clients.
- Every time a key matching any of the prefixes is modified, all clients subscribed to such prefix will receive the invalidation message.