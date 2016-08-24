var dataA = require('./dataAccess');
var timeS = require('./timeStamp');

var output = setInterval(function(){
  dataA.getPost(1);
  timeS.getTime();
  console.log("I guess this worked")
},3000);

console.log("I guess this worked too")
