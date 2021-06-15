
const dayIsMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


export function isLeapYear(year) {
   return !((year %  4) || (!(year % 100) && (year % 400)));
}

export function getDaysInMonth(date) {
    const month = date.getMonth();
    const year = date.getYear();

    if (isLeapYear(year) && month === 1) { // 1 = february
      return dayIsMonth[month] +1;
    }else  {
      return  dayIsMonth[month];
    }
}

export function getDayOfWeek(date) {
    const dayOfWeek = date.getDay();
    if(dayOfWeek === 0) return 6;
    return dayOfWeek - 1;
}

export function Day(year, month) {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDayOfWeek(date);
    let day = 1;

    for (let i= 0; i < (daysInMonth + monthStartsOn) / 7; i++) {
        result[i] = [];
        for(let j = 0; j < 7; j++) {
            if ((i === 0 && j < monthStartsOn) || day > daysInMonth ) {
                result[i][j] = undefined;

            } else {
                result[i][j] = new Date(year, month, day++);
            }
        }
    }
    return result;
}
