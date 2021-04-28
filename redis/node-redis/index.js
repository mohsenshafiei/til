const redis = require("redis");

require("dotenv").config();

const redisClient = redis.createClient(
  process.env.REDIS_PORT,
  process.env.REDIS_HOST
);

redisClient.on("connect", () => {
  console.log("Redis Connected");
});

redisClient.on("error", (err) => {
  console.log(`Redis error: ${err}`);
});

// Start our app!
const app = require("./app");

// Start Server
app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(
    "Start Server | ",
    `Express running → PORT ${server.address().port}`
  );
});
