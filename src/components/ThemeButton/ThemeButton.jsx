import { ThemeContext, ThemeEnum } from '../context'

export const ThemeButton = () => {
  return (
    <ThemeContext.Consumer>
      {
        ({ theme, setTheme }) => <button
          onClick={() => setTheme(theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT)}>
          SWITCH TO {theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT}</button>
      }
    </ThemeContext.Consumer>
  );
};
