const os = require('os'); // build in modules os, http, path , fs etc. no need to install anything

//info about current user
const user = os.userInfo();

//method returns the system uptime is seconds
console.log(user);
console.log(`The system Uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};
console.log(currentOS);