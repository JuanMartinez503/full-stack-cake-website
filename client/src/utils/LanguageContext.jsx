import { createContext, useContext, useReducer } from 'react';
import Cookies from 'js-cookie';


// Import our reducer
import { reducer } from './reducers';

// Create our theme context using createContext()
export const LanguageContext = createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const useLanguage = () => useContext(LanguageContext);

// Creating our theme provider. Accepts an argument of "props"
export default function ThemeProvider(props) {
    const language = Cookies.get('language') === 'true';


    // Set up our useReducer hook. Accepts two arguments - the reducer and an initial state
    const [state, dispatch] = useReducer(reducer, { language });

  return <LanguageContext.Provider value={[state, dispatch]} {...props} />;
}
