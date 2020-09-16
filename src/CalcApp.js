import React, { useState } from 'react'
// use hooks with dummy components
// use state hook

// CALCULATOR APP

const App = () => {

  const [calcState, setCountState] = useState({
    firstNum: '',
    operator: null,
    secondNum: '',
    result: '',
  })

  calcState.handleNumClick = event => {

    if (calcState.operator) {
      let x = event.target.value
    setCountState({ ...calcState, secondNum: calcState.secondNum + x })
    
    } else {
      let x = event.target.value
      setCountState({ ...calcState, firstNum: calcState.firstNum + x })
      
    }

  }

  calcState.handleOpClick = event => {
    setCountState({ ...calcState, operator: event.target.value })
  }

  calcState.handleEqualClick = event => {
    switch (calcState.operator) {
      case '+':
        setCountState({ ...calcState, result: '= ' + (parseInt(calcState.firstNum) + parseInt(calcState.secondNum)) })

        break;
      case '-':
        setCountState({ ...calcState, result: '= ' + (parseInt(calcState.firstNum) - parseInt(calcState.secondNum)) })
        break;
      case '*':
        setCountState({ ...calcState, result: '= ' + (parseInt(calcState.firstNum) * parseInt(calcState.secondNum)) })
        break;
      case '/':
        setCountState({ ...calcState, result: '= ' + (parseInt(calcState.firstNum) / parseInt(calcState.secondNum)) })
        break;
    
      default:
        break;
    }
  }



  return(
    <>
      <h1>{calcState.firstNum} {calcState.operator} {calcState.secondNum} {calcState.result}</h1>

      <button onClick={calcState.handleNumClick} value={'1'}>1</button>
      <button onClick={calcState.handleNumClick} value={'2'}>2</button>
      <button onClick={calcState.handleNumClick} value={'3'}>3</button>
      <button onClick={calcState.handleNumClick} value={'4'}>4</button>
      <button onClick={calcState.handleNumClick} value={'5'}>5</button>
      <button onClick={calcState.handleNumClick} value={'6'}>6</button>
      <button onClick={calcState.handleNumClick} value={'7'}>7</button>
      <button onClick={calcState.handleNumClick} value={'8'}>8</button>
      <button onClick={calcState.handleNumClick} value={'9'}>9</button>
      <button onClick={calcState.handleNumClick} value={'0'}>0</button>

      <h1>Operator buttons</h1>
      <button onClick={calcState.handleOpClick} value={'+'}>add</button>
      <button onClick={calcState.handleOpClick} value={'-'}>minus</button>
      <button onClick={calcState.handleOpClick} value={'*'}>multiply</button>
      <button onClick={calcState.handleOpClick} value={'/'}>divide</button>

      <br/>
      <button onClick={calcState.handleEqualClick}>=</button>


     
    
    </>
  )
}






















// COUNTER APP =============================


// const App = () => {

//   const [countState, setCountState] = useState({
//     count: 0,
//     message: "hello"
//   })

//   countState.handleIncrement = () => {
//     setCountState({ ...countState, count: countState.count + 1})
//   }

//   countState.handleDecrement = () => {
//     setCountState({ ...countState, count: countState.count - 1})
//   }

//   countState.handleReset = () => {
//     setCountState({ ...countState, count: 0})
//   }



//   return(
//     <>
//     <h1>{countState.message}</h1>
//     <h1>Count: {countState.count}</h1>
//     <button onClick={countState.handleIncrement}>Incrementt</button>
//     <button onClick={countState.handleDecrement}>Decrement</button>
//     <button onClick={countState.handleReset}>Reset</button>
//     </>
//   )
// }

export default App