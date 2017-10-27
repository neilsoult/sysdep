"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser = function (command, system) {
    var words = command.split(' ');
    switch (words[0]) {
        case 'DEPEND':
            system.depend.apply(system, [words[1]].concat(words.slice(2)));
            break;
        case 'INSTALL':
            system.install(words[1]);
            break;
        case 'LIST':
            system.list();
            break;
        case 'REMOVE':
            system.remove(words[1]);
            break;
        case 'END':
            break;
        default:
            console.log('Bad input!');
    }
};
exports.default = parser;
//# sourceMappingURL=parser.js.map