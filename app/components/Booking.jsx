var React = require('react');

var Booking = React.createClass({

  render: function(){
    var {id} = this.props;
    var {name} = this.props;
    return(
      <div>
        {id}
        {name}
      </div>
    );
  }

});

module.exports = Booking;
