import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'


const Phrases = ({quotesRandom, colorRandom, clickButton}) => {
  
  const stylePhrase = {color: colorRandom}
  const styleButton = {backgroundColor: colorRandom}

  return (
    <article style={stylePhrase} className='phrase'>
      <p>"{quotesRandom.quote}"</p>
      <h4>{quotesRandom.author}</h4>
      <Button styleButton={styleButton} clickButton={clickButton}/>
      <FontAwesomeIcon icon={faBookOpenReader} /> 
      
    </article>
  )
}

export default Phrases