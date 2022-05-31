import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import Phrases from './components/Phrases'

const arrayColors = [
  "#1cd82cc9", "#1cbcd8c9", "#1c1fd8c9", "#1c5961c9", "#ca2894a1", "8cca28a1", "#288fcaa1", "#ca28bca1", "#497a5d83", "#4d7a4983", "#11380d83", "#69092183", "#24690983", "#25a39983"
]

function App() {
  const createIndex = array => {
    return Math.floor(Math.random() * array.length)
  }
  
  const getElementRandom = array => {
    const i = createIndex(array)
    return array[i]
  }

  const [quotesRandom, setquotesRandom] = useState(getElementRandom(quotes))
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors))
  
  const clickButton = () => {
    setquotesRandom(getElementRandom(quotes))
    setColorRandom(getElementRandom(arrayColors))
  }
  
  const styleColor = {backgroundColor: colorRandom}
  
  return (
    <div style={styleColor} className="App">
      <Phrases 
      quotesRandom={quotesRandom} 
      colorRandom={colorRandom}
      clickButton={clickButton}
      />
    </div>
  )
}

export default App
