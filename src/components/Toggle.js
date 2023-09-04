import { useContext } from 'react';
import Button from './Button';
import ModeContext from '../context/ModeContext'

function Toggle() {
  // const [isDark, setIsDark] = useState(true);
  const ctx = useContext(ModeContext); 

  // const handlerToggleDark = () => {
  //   setIsDark(() => !isDark);
  //   console.log('isDark:', isDark);
  // }
  // const buttonLabel = isLight ? '🌛' : '🌞';
  const buttonLabel = ctx.isDark ? '🌛' : '🌞';
  return (
  <span>
    Toggle Mode<Button label={buttonLabel} onClick={ctx.handlerToggle} />
  </span>
  )
}

export default Toggle;