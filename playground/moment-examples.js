var moment = require('moment');

console.log(moment().unix());

var timestamp = moment().unix();

console.log(moment.unix(timestamp).format('MMM Do YYYY @ h:mm a'));
