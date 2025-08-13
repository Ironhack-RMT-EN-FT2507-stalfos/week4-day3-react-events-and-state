


function Event() {

  // 3 different ways to write the handle functions inside the components

  const handleMouseEnter = () => { 
    console.log("hey, passing the mouse over the h1")
    // ...
  }

  const handleMouseLeave = () => console.log("leaving the h1")

  // function handleMouseLeave() {
  //   console.log("leaving the h1")
  // }

  function handleClickButton() {
    console.log("clicking on the button")
  }

  const handleInputChange = (event) => {
    // console.log("user is changing the input")
    // console.log(event)
    console.log(event.target.value)
  }

  return (
    <div>
      
      <h1 onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>Events!</h1>

      <button onClick={handleClickButton}>Click</button>

      <br />

      <input onChange={ handleInputChange } type="text" />

    </div>
  )
}
export default Event



// function startGame() {
//   // ....
// }


// btnNode.addEventListener("click", startGame)


// document.addEventListener("keydow", (event) => {

// })