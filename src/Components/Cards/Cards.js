import {React, useState , useEffect} from 'react';
import { cardData } from '../Data/Data';
import Card from './Card';
import './card.css';

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [firstSelection, setFirstSelection] = useState(null);
    const [secondSelection, setSecondSelection] = useState(null);
    const [disabled, setDisabled] = useState(false);
    // const [removeCard, setRemoveCard] = useState([]);
    // const [matched, setMatched] = useState(false);

      // shuffle cards to start the game and give unique Suffled id (s_id) for each item
      
  const shuffleCards = () => {
    const cardsPair = [...cardData, ...cardData]  
      .sort(() => Math.random() - 0.5).map(card=>({...card, S_id: Math.random()}))
      // console.log("1 -" + cardsPair);
    setFirstSelection(null)
    setSecondSelection(null)
    setCards(cardsPair)
    setMoves(0)
  }
    // handle a choice
    const handleSelection = (card) => {
     
        console.log(card)
        firstSelection ? setSecondSelection(card) : setFirstSelection(card)


    
       
           }

      // check the cards if they match or not
  useEffect(() => {
   
    if (firstSelection && secondSelection) {
     setDisabled(true); //prevent clicking 

      if (firstSelection.face_no === secondSelection.face_no) {
        cards.map(card=>{
          if (card.face_no===firstSelection.face_no){
            // setRemoveCard([...removeCard, card])
            // console.log("removed card : array : "+ removeCard);
           return card.matched= true;
          }else{
            return card
          }
        })
        setTimeout(() => resetMoves(), 1000)
        // firstSelection.matched = true;
        resetMoves()
      } else {
        setTimeout(() => resetMoves(), 1000)
        console.log("hi 1")
      }
    }
  }, [firstSelection, secondSelection,])

    // reset selection & increase m0ves
    const resetMoves = () => {
        setFirstSelection(null)
        setSecondSelection(null)
        setMoves(prevMoves => prevMoves + 1)
        setDisabled(false)
      }

  return (
  
  <div className='cards-container'>
    <div className="top">

    <span>Turns: {moves}</span>
  
    <button onClick={shuffleCards}>New Game</button>
    </div>

    <div className="cards-grid">
    
      {cards.map((card, index) => (
        <Card 
          key={card.S_id}
          card={card}
          handleSelection={handleSelection} 
          flipped={card === firstSelection || card === secondSelection || card.matched }
          // removed= {removeCard}
          disabled={disabled}
        />
      )
      )}
    </div>

    
  </div>
  )
}

export default Cards;
