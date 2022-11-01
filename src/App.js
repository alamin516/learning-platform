import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null)
function App() {
  const [theme, setTheme] = useState('light')

  const themeValue = { theme, setTheme }
  return (
    <ThemeContext.Provider value={themeValue}>
      <div className='App' id={theme}>
        <RouterProvider router={routes}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
