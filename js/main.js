'use strict';

console.clear();

{
  const year = 2020;
  const month = 4; //0から始まるので5月

  function getCalendarHead() {
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay();

    for (let i = 0; i < n; i++) {
      // 30
      // 29,30
      // 28.29.30
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }

    return dates;
  }

  function getCalendarBody() {
    const dates = []; //date:日付,day:曜日
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i =1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday: false,
        idDisabled: false,
      });
    }

    return dates;
  }

  function getCalendarTail() {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();

    for (let i = 0; i < 7 - lastDay; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
      });
    }

    return dates;
  }

  function createCalendar() {
    const dates = [
      ...getCalendarHead(),
      ...getCalendarBody(),
      ...getCalendarTail(),
    ];

    const weeks = [];
    const weeksCount = dates.length / 7;

    for (let i = 0; i < weeksCount; i++) {
      weeks.push(dates.splice(0, 7));
    }

    // console.log(dates);
    console.log(weeks);
  }

  createCalendar();
}