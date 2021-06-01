import React from 'react';
import classnames from 'classnames';
import { getMonthData } from './utils'

import './index.css'


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
    const monthData = getMonthData.getData(this.year, this.month);

    return (

        <table className='dayMonth'>
          <tbody>
            {monthData.map((week, index) =>
              <tr key={index} className="week">
                {week.map((date, index) => date ?
                  <td key={index}
                    className={classnames('day', {
                      'today': getMonthData.areEqualDay(date, currentDate),
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

// export function DayMonth(props) {
//     let { year, month } = props;
//     let current = new Date(year, month);
//     let next = new Date(year, month + 1);
//     let diff = (next - current)/(1000 * 3600 * 24);
//     let index = (current.getDay() + 6) % 7;
//     const ROWS = Math.ceil((index + diff) / 7);
//     const COLS = 7;
//     let table = [], tr, day = 1 - index;
//
//     for (let i = 0; i < ROWS; i++) {
//         tr= [];
//         for(let i = 0; i < COLS; i++) {
//             tr.push(<td>{(day > 0 && day <= diff) ? day : undefined}</td>);
//             day++;
//         }
//         table.push(<tr>{tr}</tr>);
//     }
//
//     return(
//       <table>
//           {table}
//       </table>
//     );
// }
