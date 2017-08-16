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
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list'){
  var allNotes = notes.getAll();
  if(allNotes){
    console.log('Notes gotten', allNotes);
  } else {
    console.log('Getting notes failed');
  }
} else if (command === 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Note gotten');
    notes.logNote(note);
  } else {
    console.log('No note found');
  }
} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
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
