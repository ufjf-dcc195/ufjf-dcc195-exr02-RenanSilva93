var server = require("./server");
var router = require("./router");
var handlers = require("./handlers");

var handlersA = {};
handlersA["/"] = handlers.senha;


server.start(router, handlersA);
