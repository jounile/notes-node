console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note:', title, body);
};

var getAll = () => {
  console.log('Getting all notes:');
};

var getNote = (title) => {
  console.log('Getting note:', title);
};

var removeNote = (title) => {
  console.log('Removing note:', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};

// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New note';
// };
// module.exports.add = (a, b) => {
//   console.log('add');
//   return a+b;
// };
