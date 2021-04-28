### How it works?

In RDB(Redis Database) persistence, snapshots of the data are stored in a disk in a dump.rdb file.

The interval for snapshotting is defined in the configuration file.

save 900 1 (15 min) -> if at least one key changed
save 300 10 (5 min) -> if at least 10 key changed
save 60 10000 -> if at least 10000 keys changed in a minute

NOTE: A user can also save the data in an rdb file using the *SAVE* command. This command blocks the Redis server, so it should be avoided. Instead, the *BGSAVE* command, which creates a child process for snapshotting, should be used

Snapshotting can be disabled by deleting all save directives in the redis.conf file and then restarting the Redis server.

### Configuration


##### RDB Persistence (SNAPSHOTTING)

- *rdbcompression* -> setting false will decrease CPU cycle -> when it is true it uses LZF compression -> by default is true
- *rdbchecksum* -> CRC64 checksum is placed at the end of the file -> it has performance cost (around 10%) -> for the full performance you can disable
- *stop-writes-on-bgsave-error* -> If this option is true, Redis will stop accepting writes if the latest background save failed -> If the background saving process starts working again, Redis will automatically allow writes again.
- *dbfilename* -> This option is used to specify the .rdb filename. The default value is dump.rdb


NOTE: Saving all the data in a file is time consuming -> and if the data is big need to force Redis to stop serving client -> The AOF is another approach for saving data that is much perforamant

##### Append-Only File (AOF) Persistence

When AOF is enabled, every write operation received by the server is logged into a file. When the Redis is restarted, all the commands in the AOF file are run again, and the entire dataset is created.

- *appendonly* -> can be true or false
- *appendfilename* -> by default is appendonly.aof
- *appendfsync* -> can  control flushing time
  - no: Let the OS decide when to flush.
  - always: Flush on every write. This makes Redis slow, but it is the safest option.
  - everysec- Flush every second.
- *no-appendfsync-on-rewrite*
- *auto-aof-rewrite-percentage*
- *auto-aof-rewrite-min-size*

- Redis uses snapshotting as the default strategy. If you are fine with losing a few seconds of data, then this strategy should be used. If you need complete durability and can’t afford to lose any data, then AOF should be used.

- You can also use both strategies but Redis will use AOF to populate data, as it is the most accurate one.