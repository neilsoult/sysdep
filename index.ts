import Package from './src/package';
import System from './src/system';
import parser from './src/parser';

const input = [
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
let system = new System();

input.forEach((command) => {

    console.log(command);
    parser(command, system);

});

process.exit();