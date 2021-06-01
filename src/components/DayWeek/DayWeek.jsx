import React, {Component} from "react";

import './index.css';

export class DayWeek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekDayNames: ['Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su']
    };
  }

  render() {
    const { weekDayNames } = this.state;

    return (

        <thead className='dayWeek'>
          <tr>
            {weekDayNames.map(name =>
              <th key={name} >{name}</th>
            )}
           </tr>
        </thead>

    );
  }
}
