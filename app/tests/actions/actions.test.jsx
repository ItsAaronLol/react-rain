var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate add booking action', () => {
    var action = {
      type: 'ADD_BOOKING',
      name: 'Aaron',
      number: '0403768213',
      date: '20th June',
      time: '11pm'
    };
    var res = actions.addBooking(action.name, action.number, action.date, action.time);
    expect(res).toEqual(action);
  });

  it('should generate toggle booking action', () => {
    var action = {
      type: 'TOGGLE_BOOKING',
      id: '123'
    }
    var res = actions.toggleBooking('123');
    expect(res).toEqual(action);
  });
});
