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
    },
    filterBookings: function(bookings, showCompleted, searchText){
      searchText = searchText.toLowerCase();
      var filteredBookings = bookings;

      //Filter by showCompleted
      filteredBookings = filteredBookings.filter((booking)=>{
        return !booking.completed || showCompleted;
      });
      //Filter by searchText

      filteredBookings = filteredBookings.filter((booking) => {
        var name = booking.name.toLowerCase();
        return searchText.length === 0 || name.indexOf(searchText) > -1;
      });
      // Sort todos with non-completed first
      filteredBookings.sort((a, b) => {
        //a before b
        if(a.completed && b.completed){
          return -1;
        }
        //a after b
        if(a.completed && !b.completed){
          return 1;
        } else {
          //do nothing
          return 0;
        }
      });

      return filteredBookings;
    }
}
