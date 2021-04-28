### Sorted Set Use Cases

- Maintain a leaderboard of a game, get top X etc
- Any top something, such as top post, top pageviews etc
- Index other data in Redis. For example a sorted set where each member is a USER ID and the score is their age. You can query for all users within a given age range.

### COMMANDS

- ZADD key score value …
- ZRANGE key start end -> if we need to fetch all the elements in the sorted set, we can provide -1 in the field as shown below
- ZRANGEBYSCORE key start end
- ZCARD key -> the number of elements in a sorted set
- ZCOUNT key min max
- ZREM key value
- ZRANK key member
- ZREVRANK key member
- ZSCORE key member -> To get the rank of an element