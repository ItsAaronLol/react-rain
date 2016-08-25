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

});
