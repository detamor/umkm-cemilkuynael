// case2/index.js

const comments = require('./data/comments');
const countTotalComments = require('./utils/commentUtils');

const total = countTotalComments(comments);

console.log('Total komentar (termasuk semua balasan):', total);
