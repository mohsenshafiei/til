To secure Redis, the password should be set in the config file

Redis only support basic security mechanisms. anyone who knows the password can access the data in Redis. It is not possible to have different users with different permission levels.

### COMMANDS

- config get requirepass -> by default it will return "" since we have not set any password yet
- config set requirepass password
- AUTH password

### How to restrict specific commands

We can restrict specific commands like fullall by renaming this commands to something that only one person knows

Here are the steps for renaming commands

- rename-command flushall purgeall
- redis-server.exe redis.conf