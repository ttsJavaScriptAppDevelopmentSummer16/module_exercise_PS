var Moment = require('moment');

var timeStamp = {
  getTime: function(){
    console.log(Moment().format("h:mm:ss a"))
  }
}

module.exports = timeStamp;
