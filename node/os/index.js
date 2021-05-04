const os = require('os');

console.log("Architecture:", os.arch(), "\n")
console.log("CPUs:", os.cpus(), "\n")
console.log("Network interfaces:", os.networkInterfaces(), "\n")
console.log("Platform:", os.platform(), "\n")
console.log("Release number:", os.release(), "\n")
console.log("User info:", os.userInfo(), "\n")
console.log("Total memory:", os.totalmem(), "\n")
console.log("Free  emory:", os.freemem(), "\n")
console.log("Home directory:", os.homedir(), "\n")
console.log("Host name:", os.hostname(), "\n")
console.log("OS Type:", os.type(), "\n")
console.log("OS uptime:", os.uptime(), "\n")

const total_memory = os.totalmem();
const total_mem_in_kb = total_memory/1024;
const total_mem_in_mb = total_mem_in_kb/1024;
const total_mem_in_gb = total_mem_in_mb/1024;
console.log("Total memory:", total_mem_in_gb, "GB", "\n")

// Note that you do not have access to os module inside browser