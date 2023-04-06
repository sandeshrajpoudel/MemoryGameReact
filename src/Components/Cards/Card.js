import React from 'react'
import CardImg from "../../Assets/cardback.jpg"
import CardFront from "../../Assets/card front.jpg"
import './card.css'

const Card = ({disabled, card, handleSelection, flipped, }) => {
     const handleClick = () => {
     
    if (!disabled) {
        handleSelection(card)
      }
    }
  return (
    <> <div className="card">
      {flipped ? <div className="front">
<div className='front-text'>{card.face_no}</div>
    <img src={CardFront} alt="front" />
   
</div> : <img className="back" src={CardImg} onClick={handleClick} alt="back" />}
     
    </div>
  </>
  )
}

export default Card