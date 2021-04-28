## What is Transaction?

A transaction is a sequence of commands that are executed atomically and in order. We can create transactions in Redis as well.

- MULTI
- EXEC
- DISCARD

Example:

```bash
multi
set number 3
incr number
get number
exec
```

When a transaction is running in Redis, no other client can run a query. Suppose a transaction has 70 commands. When EXEC is run, these 70 commands will run in the same order as they were queued. No other client will be able to run any command until these 70 commands are completed.

Suppose we want to increment the value of a key number by 10. We will start a transaction, add our command to the queue, and then execute the transaction. It is possible that, while we are creating a transaction, another client also increases the value of number by 10. To avoid this, we can use the WATCH command. WATCH means that, before executing our transaction, the Redis server will check if the key we are watching key was modified by another client after we created our transaction. If it was, the Redis server will abort our transaction.


- Watch key
- Unwatch key