### Replication In Redis

Redis follows a master-slave approach for replication. One of the servers is a master, and the other servers are called slaves. The slaves are connected to the master. All the writes happen to the master and then the master, sends these changes to the slaves. The reads can then be handled by the slaves. Through this process, the load is distributed.

If a slave gets disconnected from the master, it automatically reconnects and tries to be the exact copy of the master. There are two approaches that a slave takes to get in sync with the master.

- Partial Synchronization
- Full Synchronization
- There is an option of disk-less replication as well. The child process can directly send the rdb to replicas over the wire, without using the disk as intermediate storage.

### Synchronization of master and salves

1- The master is non-blocking and continues to handle queries when one or more replicas perform the initial synchronization or a partial re-synchronization.

2- The slave is also non-blocking. When a slave is synchronizing the data, it will also serve the clients from the old data if it is configured to do so.

3- When a slave gets disconnected from the master, it may or may not serve the clients. It depends on the slave-serve-stale-data configuration. If this configuration is set to yes, then the slave will serve out-of-date data to the client. If it is false, then the slave will reply with a SYNC with master in progress error to all the commands except INFO and SLAVEOF.

4- The slave sends a ping to the master after regular intervals. This tells the master if a slave is still connected or not. By default, a slave sends the ping every ten seconds, but this can be configured using the repl-ping-slave-period property in the redis.conf file.
We can configure how much bandwidth is used in syncing the slave by using the repl-disable-tcp-nodelay configuration. If this value is yes, Redis will use a smaller number of TCP packets and less bandwidth to send data to slaves. This will delay the appearance of data on the slave side. If no is selected, then the delay will be reduced, but more bandwidth will be used for replication.

5- When a slave disconnects from a master, the data being transmitted is saved in a buffer. When a slave reconnects, it gets the data from this buffer. If a slave is disconnected for too long, this buffer may not have all the data that the slave missed, so full sync is required. The larger the size of the buffer, the higher the chances are of a partial sync. The default size of the buffer is 1 MB, but this can be configured using repl-backlog-size. The buffer is allocated only when the first slave is connected to the master.

6- If all the slaves are disconnected from the master, then the buffer is not required anymore. It is deleted after a certain period of time, which can be defined through the repl-backlog-ttl property. The default value is 3,600 seconds.

7- Each slave has a priority that is used to decide which slave will be promoted to master in case the master crashes. If there are three slaves with priorities 20, 30, and 50 then the slave with priority 20 will be promoted to master. The default priority of a server is 100. This can be configured using the slave-priority configuration. If this field is set to 0, then it means that a slave cannot be promoted to master.


### Performance Impact of Replication On Redis

- Storing the data on the disk is a costly operation so it is possible that, due to latency concerns, persistence is disabled on the master server. 

- However, turning the persistence off is not advised unless it is absolutely necessary. If disabling persistence is necessary, the master should be configured to avoid restarting automatically after a reboot.

### How Replication is done in Redis?

- The master sends the data to be replicated to the slave and does not check if it was actually saved in the slave server. The slave server asynchronously acknowledges the amount of data received periodically from the master. This gives the master an idea of what commands the slaves have processed.

- The replication ID and offset are used to figure this out. Each master server has a replication ID that is also inherited by a slave. The master also has an offset that increments for every byte of replication stream that is produced to be sent to replicas. When a slave is reconnected, it sends its offset to the server.

- Let’s suppose the master has a replication ID of 123gh3 and an offset as 12,000. The slave has the replication ID of 123gh3 and the offset of 10,000. When the slave connects with the master, it will send its offset of 10,000 to the master. The master will then know which bytes the slave is missing and it will resend those bytes to the slave.

- There can be a situation where the offset provided by the slave is too old, and the master does not have that stream in the buffer. In that case, partial sync cannot be done and full sync is required.


### How full sync is performed?

- Full sync is done through the rdb file. The master creates an rdb file and sends it to the slave.

- The slave then saves it to the disk and loads the data into the memory. It is possible, however, that some writes are happening on the master after the master has created the rdb file. The master will store all these write operations on a buffer, the commands from the buffer will be sent to the slave after it is done loading the rdb file. Through this process, the slave will have the exact copy of the master.

### Configuring replication in Redis

There are two ways to configure a Redis server as as slave

1- *slaveof 127.0.0.1 6379* : Provide the slaveof property in the redis.conf file
2- We can use the REPLICAOF command to convert a Redis instance into a slave. Here are a few important points about this command:
  * *REPLICAOF hostname port* will make the server a replica of another server listening at the specified hostname and port.
  * If a server is already a slave and REPLICAOF hostname port is run on this server with different hosts, it will become the slave of a new master. It will delete the data of the old master and replicate the data of the new master.
  * *REPLICAOF NO ONE* will convert a slave into a master. If a master is done, then this command can be used to convert its slave to the master. Later when the old master is up, it can be configured to become a slave.


### Read-Only Replicas

- By default, replicas are read-only. However, this behavior can be controlled using the replica-read-only property in the redis.conf file. 

- If a replica is not read-only, it will accept write commands, but as soon as it syncs with master, the data written only on the replica will be lost.

- Why we have the option to disable read-only replicas? We may compute some data using the keys that are frequently used. This can be stored on the writable replica. This type of data is called ephemeral data.


### Authenticating a replica with the master

- If the slave is already running, the following command can be used to authorize it with the server:
  - *config set masterauth <password>*
- We can also provide the master password in the redis.conf file of slave using the masterauth property, as shown below.
  - *masterauth <password>*

### Minimum Slave Configuration

- We can configure the master to only accept writes if a certain number of slaves are connected to it. This does not ensure that the replica will actually receive all the writes. There are still some chances of data loss, but the chances are reduced.

- A slave usually sends a ping to the master every second but it may get delayed. The time that has passed from when the last ping was sent is called the lag, e.g., if a master received a ping 5 seconds ago, the lag is five seconds. We can configure a master to stop accepting writes if there are less than N slaves connected, having a lag less than or equal to M seconds.

```bash
*min-replicas-to-write <number of replicas>*
*min-replicas-max-lag <number of seconds>*
```

If min-slaves-to-write is set to 3 and min-slaves-max-lag is set to 10, it means that at least three slaves must have pinged the master within the last ten seconds.

By default, min-slaves-to-write is set to 0 (feature disabled) and min-slaves-max-lag is set to 10.


### Redis Configuration File Example

```
127.0.0.1:6379> CONFIG GET *
"dbfilename"
"dump.rdb"
"requirepass"
""
"masterauth"
""
"unixsocket"
""
"logfile"
"/var/log/redis_6379.log"
"pidfile"
"/var/run/redis_6379.pid"
"maxmemory"
"0"
"maxmemory-samples"
"5"
"timeout"
"0"
"tcp-keepalive"
"0"
"auto-aof-rewrite-percentage"
"100"
"auto-aof-rewrite-min-size"
"67108864"
"hash-max-ziplist-entries"
"512"
"hash-max-ziplist-value"
"64"
"list-max-ziplist-entries"
"512"
"list-max-ziplist-value"
"64"
"set-max-intset-entries"
"512"
"zset-max-ziplist-entries"
"128"
"zset-max-ziplist-value"
"64"
"hll-sparse-max-bytes"
"3000"
"lua-time-limit"
"5000"
"slowlog-log-slower-than"
"10000"
"latency-monitor-threshold"
"0"
"slowlog-max-len"
"128"
"port"
"6379"
"tcp-backlog"
"511"
"databases"
"16"
"repl-ping-slave-period"
"10"
"repl-timeout"
"60"
"repl-backlog-size"
"1048576"
"repl-backlog-ttl"
"3600"
"maxclients"
"10000"
"watchdog-period"
"0"
"slave-priority"
"100"
"min-slaves-to-write"
"0"
"min-slaves-max-lag"
"10"
"hz"
"10"
"cluster-node-timeout"
"15000"
"cluster-migration-barrier"
"1"
"cluster-slave-validity-factor"
"10"
"repl-diskless-sync-delay"
"5"
"cluster-require-full-coverage"
"yes"
"no-appendfsync-on-rewrite"
"no"
"slave-serve-stale-data"
"yes"
"slave-read-only"
"yes"
"stop-writes-on-bgsave-error"
"yes"
"daemonize"
"yes"
"rdbcompression"
"yes"
"rdbchecksum"
"yes"
"activerehashing""yes"
"repl-disable-tcp-nodelay"
"no"
"repl-diskless-sync"
"no"
"aof-rewrite-incremental-fsync"
"yes"
"aof-load-truncated"
"yes"
"appendonly"
"no"
"dir"
"/var/lib/redis/6379"
"maxmemory-policy"
"noeviction"
"appendfsync"
"everysec"
"save"
"900 1 300 10 60 10000"
"loglevel"
"notice"
"client-output-buffer-limit"
"normal 0 0 0 slave 268435456 67108864 60 pubsub 33554432 8388608 60"
"unixsocketperm"
"0"
"slaveof"
""
"notify-keyspace-events"
""
"bind"
""
```