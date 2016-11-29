'use strict';

module.exports = (context, cb) => {
  let answer = 'Maybe';
  const number = Math.round(Math.random() * 3); // 0, 1, 2, 3
  switch (number) {
    case 1:
      answer = 'Yes';
      break;
    case 2:
      answer = 'No';
      break;
    default:
      break;
  }

  cb(null, { answer });
};
