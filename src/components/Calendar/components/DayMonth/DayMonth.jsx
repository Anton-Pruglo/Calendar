import React from 'react';
import getDay from "date-fns/getDay";
import startOfWeek from 'date-fns/startOfWeek'
import getDaysInMonth from "date-fns/getDaysInMonth";
import classnames from 'classnames';

import './DayMonth.css';

export class DayMonth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      currentDate: new Date(),
    }
  }
  get year() {
    return this.state.date.getFullYear();
  }
  get month() {
    return this.state.date.getMonth();
  }
  get day() {
    return this.state.date.getDate();
  }

  getDays = (year, month) => {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDay(date);
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


  render() {
    const { currentDate } = this.state;
    const monthData = this.getDays(this.year, this.month);

    return (

        <table className='dayMonth'>
          <tbody>
            {monthData.map((week, index) =>
              <tr key={index} className="week">
                {week.map((date, index) => date ?
                  <td key={index}
                    className={classnames('day', {
                      'today': date.getDate() === currentDate.getDate(),
                    })}
                  >{date.getDate()}</td>
                    :
                  <td key={index}
                    className='notCurrentMonth'/>
                )}
              </tr>
            )}
          </tbody>
        </table>

    )
  }
}

