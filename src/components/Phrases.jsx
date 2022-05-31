import React from 'react'
import Button from './Button'


const Phrases = ({quotesRandom, colorRandom, clickButton}) => {
  
  const stylePhrase = {color: colorRandom}
  const styleButton = {backgroundColor: colorRandom}

  return (
    <article style={stylePhrase} className='phrase'>
      <p>"{quotesRandom.quote}"</p>
      <h4>{quotesRandom.author}</h4>
      <Button styleButton={styleButton} clickButton={clickButton}/>
    </article>
  )
}

export default Phrases