import { useState } from "react"

function Counter() {

  // let counterValue = 0;
  //! a simple variable will not work, it will not allow React to re-render the component when it changes.

  // const something = useState("potato")
  // console.log(something)

  // instead we create the state
  const [ counterValue, setCounterValue ] = useState( 0 )
  const [ recordedValue, setRecordedValue ] = useState( null )

  const handleCounterIncrease = () => {

    // if (counterValue >= 20) {
    //   return
    // }

    // counterValue = counterValue + 1
    // console.log("increasing the counter", counterValue)
    // I am not telling react to render the new value

    //! In React, we NEVER access the DOM directly to make modifications

    // counterValue = counterValue + 1
    //! WE SHOULD NEVER DIRECTLY MUTATE OR CHANGE THE STATE
    // setCounterValue( counterValue + 1 )
    // setCounterValue((currentState) => {
    //   return currentState + 1
    // })
    setCounterValue((state) => state + 1)
    //1. it updates the state with the value added as an argument
    //2. after all set function are executed, it will re-render the component with the new values

  }

  const handleRecordValue = () => {
    setRecordedValue( () => {
      return counterValue
    } )



  }




  return (
    <div>
      
      <h1>Counter</h1>

      <h2>{counterValue}</h2>

      <button disabled={counterValue >= 20 ? true : false} onClick={ handleCounterIncrease }>Increase</button>

      <p>the recorder value was: {recordedValue === null ? "No recorded value": recordedValue}</p>

      <button onClick={ handleRecordValue }>Record the value</button>
      

    </div>
  )
}
export default Counter


// example of how set functions are built inside React
function setSomething(parameter) {

  if (typeof parameter === "function") {
    // ...
    newStateValue = parameter()
  } else {
    newStateValue = parameter
  }

}