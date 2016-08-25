var expect = require('expect');

var BookingAPI = require('BookingAPI');

describe('BookingAPI', () => {
  //beforeEach: called before every test
  beforeEach(() => {
    localStorage.removeItem('bookings');
  });

  it('should exist', () => {
    expect(BookingAPI).toExist();
  });

  describe('setBookings', () => {

    it('should set valid bookings array', () => {
      var bookings = [{
        id: 23,
        name: 'Jimmy',
        number: '0422938475',
        date: '20th september',
        time: '5pm',
        completed: false
      }];
      BookingAPI.setBookings(bookings);
      var actualBookings = JSON.parse(localStorage.getItem('bookings'));

      expect(actualBookings).toEqual(bookings);
    });

    it('should not set invalid bookings array', () => {
    //  localStorage.removeItem('bookings');
      var badBookings = {a: 'b'};
      BookingAPI.setBookings(badBookings);

      expect(localStorage.getItem('bookings')).toBe(null);
    });
  });

  describe('getBookings', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualBookings = BookingAPI.getBookings();
      expect(actualBookings).toEqual([]);
    });

    it('should return booking if valid array in localStorage', () => {
      var bookings = [{
        id: 23,
        name: 'Jimmy',
        number: '0422938475',
        date: '20th september',
        time: '5pm',
        completed: false
      }];
      localStorage.setItem('bookings', JSON.stringify(bookings));
      var actualBookings = BookingAPI.getBookings();

      expect(actualBookings).toEqual(bookings);
    });
  });

  describe('filterBookings', () => {
    var bookings =[{
      id: 1,
      name: 'Jimmy',
      number: '0422948458',
      date: '20th august',
      time: '5pm',
      completed: true
    }, {
      id: 2,
      name: 'Ronnie',
      number: '0433928374',
      date: '20th November',
      time: '2pm',
      completed: false
    }, {
      id: 3,
      name: 'Peter',
      number: '0433928374',
      date: '20th July',
      time: '1pm',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      var filteredBookings = BookingAPI.filterBookings(bookings,true,'');
      expect(filteredBookings.length).toBe(3);
    });

    it('should return uncompleted items if showCompleted is false', () => {
      var filteredBookings = BookingAPI.filterBookings(bookings,false,'');
      expect(filteredBookings.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredBookings = BookingAPI.filterBookings(bookings,true, '');
      expect(filteredBookings[0].completed).toBe(false);
    });

    it('should filter bookings by searchText', () => {
      var filteredBookings = BookingAPI.filterBookings(bookings,true, 'peter');
      expect(filteredBookings.length).toBe(1);
    });
    it('should return all bookings if searchText is empty', () => {
      var filteredBookings = BookingAPI.filterBookings(bookings,true, '');
      expect(filteredBookings.length).toBe(3);
    });
  });
});
