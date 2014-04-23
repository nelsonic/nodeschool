var crypto = require('crypto'); // node core
process.stdin.pipe(crypto.createDecipher('aes256', process.argv[2]))
  .pipe(process.stdout);