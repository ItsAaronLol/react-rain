var React = require('react');
var BookingList = require('BookingList')
var BookingApp = React.createClass({
  getInitialState: function () {
    return {
      bookings: [
        {
          id: 1,
          name: 'Timothy'
        }, {
          id: 2,
          name: 'John'
        }, {
          id: 3,
          name: 'Bronson'
        }, {
          id: 4,
          name: 'Jimmy'
        }
      ]
    };
  },
  render: function () {
    var {bookings} = this.state;
    return (
      <div>
        <BookingList bookings={bookings}/>
      </div>
    )
  }
});

module.exports = BookingApp;
