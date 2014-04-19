var websocket = require('websocket-stream');
var ws = websocket('ws://localhost:8000');
ws.end('hello\n');