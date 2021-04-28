### HOW TO USE

- Redis can also be used as a message queue. The publisher can publish to only one channel, although a channel may have multiple subscribers. A subscriber can subscribe to one or more channels.

### COMMANDS
- SUBSCRIBE channel
- PUBLISH channel message
- UNSUBSCRIBE channel
- PSUBSCRIBE string* -> using pattern for subscribing
- PUNSUBSCRIBE string* -> using pattern for unsubscribing