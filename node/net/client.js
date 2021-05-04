const net = require("net");
const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});

const client = net.connect({ port: 3500 }, () => {
  console.log("Connection established");
  client.write("Hello from client");
});

client.on("data", (data) => {
  console.log("Msg from server:", data.toString());
});

client.on("end", () => {
  console.log("disconnected from server");
});

rl.prompt();
rl.on("line", function (line) {
  client.write(line);
  rl.prompt();
});