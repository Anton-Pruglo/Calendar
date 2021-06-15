import React from 'react';

import classnames from "classnames";
import {DayWeek} from "./components/DayWeek";
import {DayMonth} from "./components/DayMonth";
import {ThemeContext, ThemeEnum} from "../context";

import './Calendar.css'

 export class Calendar extends React.Component {

  render() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    return (
      <ThemeContext.Consumer>
        {
          ({ theme }) => (
            <div className={classnames('calendar', {
              'dark': theme === ThemeEnum.DARK})
            }>

            <header>
              <section className={classnames('month', {
              'dark': theme === ThemeEnum.DARK})
              }>
                {monthNames[month]}
              </section>
              <section className={classnames('year', {
                'dark': theme === ThemeEnum.DARK})
              }>
                {year}
              </section>
            </header>
            <DayWeek/>
            <DayMonth/>
            <div className='confirmation'>
              <button className={classnames('cancel', {
                'dark': theme === ThemeEnum.DARK})
              }>
                Cancel
              </button>
              <button className='set-date'>Set Date</button>
            </div>
           </div>
            )
        }
      </ThemeContext.Consumer>
    );
  }
}
