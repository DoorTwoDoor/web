import Moment from 'moment';

function getRange(startNumber, endNumber) {
  const length = endNumber - startNumber + 1;

  return Array.from({ length }, (value, key) => {
    return key + startNumber;
  });
}

function getOption(key, value, text) {
  return {
    key,
    value,
    text,
  };
}

function getDayOptions(yearNumber, monthNumber) {
  const startDayNumber = 1;
  const endDayNumber = Moment([yearNumber, monthNumber - 1]).daysInMonth();
  const dayNumbers = getRange(startDayNumber, endDayNumber);

  return dayNumbers.map(dayNumber => {
    return getOption(dayNumber, dayNumber, dayNumber);
  });
}

function getMonthOptions() {
  const monthNames = Moment.months();

  return monthNames.map((monthName, index) => {
    const monthNumber = index + 1;

    return getOption(monthNumber, monthNumber, monthName);
  });
}

function getYearOptions() {
  const startYearNumber = 1901;
  const endYearNumber = Moment().year();
  const yearNumbers = getRange(startYearNumber, endYearNumber).reverse();

  return yearNumbers.map(yearNumber => {
    return getOption(yearNumber, yearNumber, yearNumber);
  });
}

export {
  getDayOptions,
  getMonthOptions,
  getYearOptions,
};
