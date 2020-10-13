'use strict';

{
  const year = 2020;
  const month = 4; //0から始まるので5月

  function getCalendarBody() {
    const dates = []; //date:日付,day:曜日
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i =1; i <= lastDate; i++) {
      dates.push(i);
    }

    console.log(dates);
  }

  getCalendarBody();
}