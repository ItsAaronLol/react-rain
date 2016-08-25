var $ = require('jquery');

module.exports = {
    setBookings: function(bookings) {
      if($.isArray(bookings)) {
        localStorage.setItem('bookings', JSON.stringify(bookings));
        return bookings;
      }
    },
    getBookings: function(){
      var stringBookings = localStorage.getItem('bookings');
      var bookings = [];
      JSON.parse(stringBookings);

      try {
        bookings = JSON.parse(stringBookings);
      } catch (e) {

      }
      return $.isArray(bookings) ? bookings : [];

      // if($.isArray(bookings)) {
      //   return bookings;
      // } else {
      //   return [];
      // }
    }
}
