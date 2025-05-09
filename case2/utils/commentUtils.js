// case2/utils/commentUtils.js

function countTotalComments(comments) {
    let total = 0;
  
    function count(commentsArr) {
      total += commentsArr.length;
      commentsArr.forEach(comment => {
        if (comment.replies && comment.replies.length > 0) {
          count(comment.replies);
        }
      });
    }
  
    count(comments);
    return total;
  }
  
  module.exports = countTotalComments;
  