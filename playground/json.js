// var obj = {
//   name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Andrew","age":25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

// Define note
var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

// Convert to string
var originalNoteString = JSON.stringify(originalNote);

// Write note to file
fs.writeFileSync('notes.json', originalNoteString);

// Read note from file to string
var noteString = fs.readFileSync('notes.json');

// Parse string to JSON object
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
