import React, {Component} from "react";

import './DayWeek.css';
import classnames from "classnames";
import {ThemeContext, ThemeEnum} from "../../../context";

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
      <ThemeContext.Consumer>
        {
          ({ theme }) => (
            <thead>
            <tr>
              {weekDayNames.map(name =>
                <th className={classnames('dayWeek', {
                  'dark': theme === ThemeEnum.DARK})} key={name}
                >
                  {name}
                </th>
              )}
            </tr>
            </thead>
          )
        }
      </ThemeContext.Consumer>
    );
  }
}
