# List Use Cases

- Timeline of social network - LPUSH to add new items, LRANGE to retrieve most recently added items
- LPUSH + LTRIM together always keep top/lastet N
- Usefull for loging of recent user actions/errors
- RPOPPUSH using same source and destination to create a rotation of "ring of items"
- Blocking / Waiting

### Commands

LPUSH key value
LRANGE key start end -> LRANGE cars 0 -1 -> it will return all the elements
LPOP key
RPUSH key value
RPOP key
LLEN key
LINDEX key index
LSET key index value -> update element at index i
LPUSHX key value -> add an element to the head of the list if it exist
LINSERT key before/after pivot value
