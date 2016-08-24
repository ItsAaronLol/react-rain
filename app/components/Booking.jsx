var React = require('react');

var Booking = React.createClass({

  render: function(){
    var {id, name, number, date, time, completed} = this.props;

    return(
      <div onClick={()=>{
          this.props.onToggle(id);
        }}>
        <input type = "checkbox" checked={completed}/>
        {name}
        {number}
        {date}
        {time}
      </div>
    );
  }

});

module.exports = Booking;
