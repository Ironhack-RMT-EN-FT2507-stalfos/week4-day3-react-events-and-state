import { useState } from "react"
import allCharacters from "../data/characters.json"
// console.log(allCharacters)

function HarryPotterCharacters() {

  // event handler for the button. When the user clicks the button an action will happend.
  // we need import the information from the json 
  // generate a random number between 0 and the array length
  // we create a state that has the information of the "random char" and we use it to display it on the green card.
  // we update the state in the handler function


  const [ randomCharacter, setRandomCharacter ] = useState(null)
  const [ favouriteList, setFavouriteList ] = useState([])

  const handleSelectRandomCharacter = () => {
    // console.log("testing")

    const randomPosChar = Math.floor(Math.random() * allCharacters.length)
    const selectedRandomChar = allCharacters[randomPosChar]
    console.log(selectedRandomChar)

    setRandomCharacter(selectedRandomChar)

  }

  const handleAddToFavourite = () => {
    // favouriteList.push(randomCharacter)

    // let stateClone = structuredClone(favouriteList) // clone the state so we don't mutate it with the push
    // stateClone.push(randomCharacter)

    // setFavouriteList( stateClone )

    setFavouriteList( [ ...favouriteList, randomCharacter ] )
    setRandomCharacter(null) // so the added to fav character is not displaying in the green anymore.

  }

  const handleRemoveFromFavourite = (indexToRemove) => {
    console.log("trying to remove a character", indexToRemove)

    const stateClone = structuredClone(favouriteList)
    stateClone.splice(indexToRemove, 1)
    setFavouriteList(stateClone)

  }

  return (
    <div>
      
      <div id="character-picker">

        <h1>Select a Random HP Character</h1>

        <button onClick={handleSelectRandomCharacter}>Select a Character</button>

        
        { randomCharacter && 
          (
            <div className="random-char">
              <h2>Random Character</h2>
              <h3>Name: {randomCharacter.name} </h3>
              <p>Description: {randomCharacter.description}</p>
              <button onClick={handleAddToFavourite}>Add to Fav</button>
            </div>
          )
        }

        {/* optional chaining operator
        <div className="random-char">
          <h2>Random Character</h2>
          <h3>Name: {randomCharacter?.name} </h3>
          <p>Description: {randomCharacter?.description}</p>
          <button>Add to Fav</button>
        </div> */}

      </div>

      <div id="fav-list">

        <h1>Favourite List</h1>

        {favouriteList.map((eachFavChar, index) => {
          return (
            <div className="fav-char">
              <h3>Name: {eachFavChar.name} </h3>
              <p>Description: {eachFavChar.description}</p>
              <button onClick={() => handleRemoveFromFavourite(index)}>Remove from Fav</button>
            </div>
          )
        })}

      </div>

    </div>
  )
}
export default HarryPotterCharacters