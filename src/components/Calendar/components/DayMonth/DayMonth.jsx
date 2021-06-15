import React from 'react';
import classnames from 'classnames';
import { getData } from './utils'

import './DayMonth.css'


export class DayMonth extends React.Component {
  static defaultProps = {
    date: new Date(),
    weekDayNames: ['Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su'],
  }
  state = {
    date: this.props.date,
    currentDate: new Date(),
  };

  get year() {
    return this.state.date.getFullYear();
  }
  get month() {
    return this.state.date.getMonth();
  }

  get day() {
    return this.state.date.getDate();
  }

  render() {
    const { currentDate } = this.state;
    const monthData = getData.Day(this.year, this.month);
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
                  <td key={index}/>
                )}
              </tr>
            )}
          </tbody>
        </table>

    )
  }
}

