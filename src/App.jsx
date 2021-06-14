import React from 'react';
import { DayMonth } from './components/DayMonth';
import { DayWeek } from './components/DayWeek';
import { Header } from './components/Header';
import { ThemeEnum, ThemeContext } from "./components/context";


import './App.css';
import classnames from "classnames";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: ThemeEnum.DARK,
    };
  }

  setTheme = (value) => this.setState({
    theme: value,
  });

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
    const { theme } = this.state;

    return (

      <ThemeContext.Provider value={{
        theme,
        setTheme: this.setTheme,
      }}>
          <Header />


    <div className={classnames("calendar", {
      'dark': this.state.dark,
      'light': !this.state.dark})
      }>
        <button onClick={this.toggleDark}>{this.state.dark ? 'LIGHT' : 'DARK'}</button>

        <header className="header">
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
      </ThemeContext.Provider>

    );
  }
}

export default App;
