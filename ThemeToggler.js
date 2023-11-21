import { useTheme } from './ThemeContext';
import './ThemeToggler.css';


function ThemeToggler() {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <div className={`theme-toggler ${theme}`}>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
      </div>
    );
  }

  export default ThemeToggler;