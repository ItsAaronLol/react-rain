var React = require('react');
var Booking = require('Booking');

var BookingList = React.createClass({
  render: function() {
    var {bookings} = this.props;
    var renderBookings = () => {
      return bookings.map((booking) => {
        return (
          <Booking key={booking.id} {...booking}/>
        );
      });
    };

    return (
      <div>
        {renderBookings()}
      </div>
    )
  }
});

module.exports = BookingList;
