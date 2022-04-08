import React, { useState } from 'react'
import Kalkulator from './components/kalkulator/Kalkulator'
import History from './components/history/History'
import {GlobalStyle, StyleApp, Main, MainInfo, StyleButton} from './components/app.style'
import github from './github.svg'

function App() {
  const [previousNumber, setPreviousNumber] = useState('')
  const [currentNumber, setCurrentNumber] = useState('')
  const [math, setMath] = useState('')
  const [history, setHistory] = useState([])
  const [historyON, setHistoryON] = useState(false);
  let result = ''
  
  const displayNumbers = (e) =>{
    const button = e.target.innerText
    if(button === '.' && previousNumber.includes('.'))return
    setPreviousNumber(previousNumber + button)
  }

  const operate = (e) =>{
    const button = e.target.innerText
    if(previousNumber === '' && button ==='-'){
      setPreviousNumber(previousNumber + button)
      return;
  }

  else if (previousNumber === '') {
      return;
   }

   if(currentNumber !== '') {
        showResult();
       return;
   }
  //  previousNumber.innerHTML = currentNumber.innerHTML;
   setCurrentNumber(previousNumber)
   setMath(button)
   setPreviousNumber('')


  }
  // console.log(history)

  const showResult = () => {
    if(previousNumber === '' || currentNumber === '') return;

    let a = Number(currentNumber)
    let b = Number(previousNumber)
    let operate = math

    switch(operate){
      case '+':
        result = a + b;
        break;
        case '-':
          result = a - b;
          break;
          case 'x' :
            result = a * b;
            break;
            case '%' :
              result = a % b
            break;
          case ':' :
            result = a / b
            break
    }
            
    setMath('')
    setCurrentNumber('')
    setPreviousNumber(result)
    setHistoryON(true)
    setHistory([...history, `${a} ${operate} ${b} = ${result}`]);
  }

  const clearResult = () =>{
    setMath('')
    setCurrentNumber('')
    setPreviousNumber('')
    
  }
  
  const clearHistory = () => {
    setHistory([])
    setHistoryON(false)
  }

  const backspace = () =>{
      setPreviousNumber(previousNumber.toString().slice(0,-1))

      if(previousNumber === ''){
        setMath('')
        setPreviousNumber(currentNumber)
        setCurrentNumber('')

      }return
  }

  return (
    <>
    <GlobalStyle />
    <Main>
      <StyleApp> 
        <Kalkulator 
          currentNumber={currentNumber} 
          previousNumber={previousNumber}  
          displayNumbers={displayNumbers} 
          operate={operate} 
          math={math} 
          showResult={showResult} 
          clearResult={clearResult} 
          backspace={backspace} 
        />
        <History 
          historyON={historyON} 
          history={history} 
          clearHistory={clearHistory}
        /> 
     </StyleApp> 
     <MainInfo>
       <p>by 0x6Star3s</p>
       <StyleButton href='https://github.com/0x6Star3s'><img src={github} alt="" /></StyleButton>

     </MainInfo>
       </Main>
    </>
  )
}

export default App
