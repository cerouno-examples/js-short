require('babel-register');

// if (process.argv[2] == "hack") {
// } else {
//   require('index.js');
// }

switch(process.argv[2]){
  case "concurrent": return require('concurrent');
  case "server": return require('server');
  case "client": return require('client');
  default: require('read.js');
}
