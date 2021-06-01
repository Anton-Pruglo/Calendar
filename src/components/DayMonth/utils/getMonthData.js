
const dayIsMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function areEqualDay(a, b) {
    if (!a || !b) {
      return false;
    }

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

 export function getDaysInMonth(date) {
    const month = date.getMonth();
    return  dayIsMonth[month];
 }
 export function getDayOfWeek(date) {
    const dayOfWeek = date.getDay();
    if(dayOfWeek === 0) return 6;
    return dayOfWeek - 1;
}

export function getData(year, month) {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDayOfWeek(date);
    let day = 1;

    for (let i= 0; i < (daysInMonth + monthStartsOn) / 7; i++) {
        result[i] = [];
        for(let j = 0; j < 7; j++) {
            if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
                result[i][j] = undefined;
            } else {
                result[i][j] = new Date(year, month, day++);
            }
        }
    }
    return result;
}
