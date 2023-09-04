import { createContext, useState } from 'react';

const ModeContext = createContext();

export function ModeProvider({ children }) {
  
  const [isDark, setIsDark] = useState(false);
  
  const handlerToggle = () => {
    setIsDark(() => !isDark);
  }
  
  const context = { 
    isDark: isDark,
    handlerToggle: handlerToggle, 
  }
  return (
    <ModeContext.Provider value={context}>
      {children}
    </ModeContext.Provider>
  )
}
export default ModeContext;

