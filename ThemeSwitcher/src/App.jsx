import { ThemeContextProvider } from './context/Theme'
import './App.css'
import {useEffect, useState } from 'react'
import Card from './component/Card';
import Themebtn from './component/Themebtn';

function App() {
  const [themeMode,setThemeMode] = useState("light");
  const lightTheme = ()=> setThemeMode("light");
  const darkTheme = ()=> setThemeMode("dark");

  // Actual Change in Theme

  useEffect(()=>{
      document.querySelector('html').classList.remove("light" , "dark");
      document.querySelector('html').classList.add(themeMode);

  },[themeMode]);
  return (
    <>
    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
            </ThemeContextProvider>
    </>
  )
}

export default App
