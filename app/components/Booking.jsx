var React = require('react');

var Booking = React.createClass({

  render: function(){
    var {id, name, number, date, time} = this.props;

    return(
      <div>
        {id}
        {name}
        {number}
        {date}
        {time}

      </div>
    );
  }

});

module.exports = Booking;
