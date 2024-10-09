import { createContext, useContext } from "react";


const ThemeContext = createContext({
    //  Giving some methods and Variable
    themeMode : "light", // deafult so we dont get the error
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}