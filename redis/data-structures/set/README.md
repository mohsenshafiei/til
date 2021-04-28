# SET Use Cases

- Tracking unique IPs (just use SADD every view and then use SCARD whenever you want)
- Tagging: use a set for each tag (each member is, say, a picture ID) you can get all pictures that have 3 different tags using SINTER
- Extract random members (ads, lottery balls, tip of the day...) using SPOP


### COMMANDS

- SADD key value1 value2 value3
- SMEMBERS key
- SISMEMBER key value
- SCARD key -> count of members present in the set
- SDIFF key1 key2 -> diff between two sets
- SUNION key1 key2 key3 ...
- SREM key value1 value2 ...
- SPOP key count -> This command is used to remove value from the set
- SMOVE source dest member