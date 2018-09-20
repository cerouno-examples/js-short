require('babel-register');

switch(process.argv[2]){
  case "concurrent": return require('concurrent');
  case "server": return require('server');
  case "client_server": return require('client/server');
  default: require('read.js');
}
