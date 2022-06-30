const fs=require('fs');
const os=require('os');
fs.writeFileSync('./.env',`API=${process.env.API}\n`);
