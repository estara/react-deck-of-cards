import React, { useState, useEffect } from "react";
import axios from "axios";
import DeckWrapper from './DeckWrapper';

function CardDeck () {
    const [deck, setDeck] = useState({id: 'new', image: null, remaining: null});
    const [dealing, setDealing] = useState(false);
    
    useEffect(() => {
        async function getCard() {
            if (deck.remaining === 0) {
                setDealing(false);
                return alert('Error: No cards remaining!')
            }
            const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.id}/draw/?count=1`);
            setDeck({id: res.data.deck_id, image: res.data.cards[0].image, remaining: res.data.remaining});
        }
        if (dealing) {
            const intervalId = setInterval(() => {
                getCard()
            }, 1000)
            
            return () => {
                clearInterval(intervalId)
            }
        }
        getCard();
        }, [dealing]);
    
    const handleClick = (evt) => {
        evt.preventDefault();
        if (dealing) {
            setDealing(false);
        } else {
            setDealing(true);
        }
    };
    
      return (
          <div>
          <DeckWrapper handleClick={handleClick} dealing={dealing}/>
        <img src={deck.image}></img>
        </div>
      );
};

export default CardDeck;
