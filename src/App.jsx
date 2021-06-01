import React, {useState, useContext} from 'react';
import { DayMonth } from './components/DayMonth';
import { DayWeek } from './components/DayWeek';

import './App.css';
import classnames from "classnames";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false,
    };
  }

  toggleDark = () => {
    const { dark } = this.state;
    this.setState({
      dark: !dark,
    });
  };

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
      <div className={classnames("calendar", {
      'dark': this.state.dark,
      'light': !this.state.dark})
      }>
        <button onClick={this.toggleDark}>{this.state.dark ? 'LIGHT' : 'DARK'}</button>

        <header>
          <section>
            {monthNames[month]}
          </section>
          <section>
            {year}
          </section>
        </header>
        <DayWeek/>
        <DayMonth/>

      </div>
    );
  }
}

export default App;
