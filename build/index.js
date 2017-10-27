"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var system_1 = require("./src/system");
var parser_1 = require("./src/parser");
var input = [
    'DEPEND TCPIP NETCARD',
    'DEPEND TELNET TCPIP SOCKET',
    'DEPEND DNS TCPIP',
    'DEPEND HTML REGEX XML',
    'DEPEND REGEX PARSING',
    'DEPEND BROWSER DNS TCPIP HTML CSS',
    'INSTALL TCPIP',
    'REMOVE NETCARD',
    'REMOVE TCPIP',
    'REMOVE NETCARD',
    'INSTALL TCPIP',
    'LIST',
    'INSTALL TCPIP',
    'INSTALL foo',
    'INSTALL NETCARD',
    'INSTALL TCPIP',
    'REMOVE TCPIP',
    'LIST',
    'INSTALL TCPIP',
    'INSTALL NETCARD',
    'REMOVE TCPIP',
    'LIST',
    'REMOVE NETCARD',
    'INSTALL BROWSER',
    'LIST',
    'REMOVE BROWSER',
    'LIST',
    'INSTALL HTML',
    'INSTALL TELNET',
    'REMOVE SOCKET',
    'INSTALL DNS',
    'INSTALL BROWSER',
    'REMOVE NETCARD',
    'LIST',
    'REMOVE BROWSER',
    'LIST',
    'END'
];
var system = new system_1.default();
input.forEach(function (command) {
    console.log(command);
    parser_1.default(command, system);
});
process.exit();
//# sourceMappingURL=index.js.map