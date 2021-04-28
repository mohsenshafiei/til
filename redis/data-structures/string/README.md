# String Use Cases

- Lock
  - SET resource-name anystring NX Ex
  - Max Lock Time
- General cache
- Picture masking (BITOP)
- Stats for A/B testing


### Commands

- SET key value
- GET key
- SETEX key seconds value
- SET key value EX seconds
- PSETEX key millisecond value
- SET key value PX milliseconds
- SETNX key value -> *We can avoid of updating the key if it exist.*
- STRLEN key -> return length
- MSET key1 value1 key2 value2
- MGET key1 key2
- KEYS *
- INCR key
- INCRBY key count
- INCRBYFLOAT key floatValue
- DECR key
- DECRBY key count
- DEL key
- FLUSHALL
- APPEND key stringToBeAppended