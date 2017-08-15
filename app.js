console.log('Starting app.');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv;
var command = argv._[0];
// console.log('Command: ', command);
// console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add'){
  notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  notes.getNote(argv.title);
} else if (command === 'remove'){
  notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}

// console.log(_.isString(true));
// console.log(_.isString('Jouni'));
// var filteredArray = _.uniq(['Jouni', 1, 'Jouni', 1, 2, 3]);
// console.log(filteredArray);

// var res = notes.addNote();
// var res = notes.add(9, -2);
// console.log(res);

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`)

// console.log(module);
