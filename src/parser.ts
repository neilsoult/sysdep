import System from './system';

const parser = (command: string, system: System) => {

    let words = command.split(' ');

    switch (words[0]) {

        case 'DEPEND':
            system.depend(words[1], ...words.slice(2));
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

export default parser;
