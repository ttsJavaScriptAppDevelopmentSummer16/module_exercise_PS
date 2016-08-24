var Request = require('request-promise');

var dataAccess = {
  getPost: function(postID){
    Request('http://jsonplaceholder.typicode.com/posts/' + postID)
    .then(function(response){
      console.log(response)
    })
  }
}

module.exports = dataAccess;
