export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};


export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
}

export var addBooking = (name, number, date, time) => {
  return {
    type: 'ADD_BOOKING',
    name,
    number,
    date,
    time
  };
}

export var toggleBooking = (id) => {
  return {
    type: 'TOGGLE_BOOKING',
    // id:id
    id
  };
}
