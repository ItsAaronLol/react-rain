var React = require('react');

var AddBooking = React.createClass({


  onSubmit: function (e){
    e.preventDefault();
    var bookingName = this.refs.bookingName.value;
    var bookingNumber = this.refs.bookingNumber.value;
    var bookingDate = this.refs.bookingDate.value;
    var bookingTime = this.refs.bookingTime.value;
    if(bookingName.length>0 && bookingNumber.length>0 && bookingDate.length>0 && bookingTime.length>0){
      this.props.onAddTodo(bookingName, bookingNumber, bookingDate, bookingTime);
    } else {
      this.refs.bookingName.focus();
    }
  },
  render: function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="bookingName" placeholder = "Name"/>
          <input type="text" ref="bookingNumber" placeholder = "Phone Number"/>
          <input type="text" ref="bookingDate" placeholder = "Date"/>
          <input type="text" ref="bookingTime" placeholder = "Time"/>
          <button>Add Booking</button>
        </form>
      </div>
    );
  }
});

module.exports = AddBooking;
