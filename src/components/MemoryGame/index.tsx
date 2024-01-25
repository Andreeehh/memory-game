import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

export interface Card {
  id: string;
  description: string;
  img: string;
}

// Definição dos cards
const uniqueCards: Card[] = [
  { img: '01.png', description: 'card 1', id: 'card1' },
  { img: '02.png', description: 'card 2', id: 'card2' },
  { img: '03.png', description: 'card 3', id: 'card3' },
  { img: '04.png', description: 'card 4', id: 'card4' },
  { img: '05.png', description: 'card 5', id: 'card5' },
  { img: '06.png', description: 'card 6', id: 'card6' },
  { img: '07.png', description: 'card 7', id: 'card7' },
  { img: '08.png', description: 'card 8', id: 'card8' },
];

// Embaralhar os cards
function shuffleCards(originalCards: Card[]): Card[] {
  const cardsCopy = [...originalCards];
  const shuffledCards: Card[] = [];

  while (cardsCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * cardsCopy.length);
    shuffledCards.push(cardsCopy.splice(randomIndex, 1)[0]);
  }

  return shuffledCards;
}

// Componente do Jogo
export const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [firstCard, setFirstCard] = useState<HTMLDivElement | null>(null);
  const [secondCard, setSecondCard] = useState<HTMLDivElement | null>(null);
  const [completedCards, setCompletedCards] = useState<string[]>([]);

  useEffect(() => {
    const shuffledCards = shuffleCards([...uniqueCards, ...uniqueCards]);
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedCard = e.currentTarget;

    if (
      clickedCard === firstCard ||
      clickedCard === secondCard ||
      clickedCard.classList.contains('show')
    ) {
      return;
    }

    if (!firstCard) {
      setFirstCard(clickedCard);
      clickedCard.classList.add('show');
    } else if (!secondCard) {
      setSecondCard(clickedCard);
      clickedCard.classList.add('show');

      if (
        firstCard.getAttribute('data-card') ===
        clickedCard.getAttribute('data-card')
      ) {
        setCompletedCards([
          ...completedCards,
          firstCard.getAttribute('data-card'),
        ]);
        setFirstCard(null);
        setSecondCard(null);
      } else {
        setTimeout(() => resetCards(clickedCard), 1000);
      }
    }
  };

  const resetCards = (cardClicked) => {
    firstCard?.classList.remove('show');
    cardClicked?.classList.remove('show');
    setFirstCard(null);
    setSecondCard(null);
  };

  useEffect(() => {
    if (completedCards.length > 0) {
      if (completedCards.length === cards.length / 2) {
        setTimeout(() => {
          alert('Congrats!');
          document.querySelectorAll('.card').forEach((card) => {
            card.classList.remove('show');
          });
          const shuffledCards = shuffleCards([...uniqueCards, ...uniqueCards]);
          setCards(shuffledCards);
          setCompletedCards([]);
        }, 1000);
      }
    }
  }, [completedCards, cards]);

  return (
    <Styled.Wrapper>
      <Styled.GameContainer>
        {cards.map((card, i) => (
          <Styled.Card
            key={i}
            data-card={card.id}
            onClick={handleCardClick}
            className={
              firstCard === (card as unknown) ||
              secondCard === (card as unknown)
                ? 'card show'
                : 'card'
            }
          >
            <Styled.CardImageFront
              src={`/assets/img/${card.img}`}
              alt={card.id}
            />
            <Styled.CardImageBack
              src="/assets/img/back.png"
              alt="Memory card"
            />
          </Styled.Card>
        ))}
      </Styled.GameContainer>
    </Styled.Wrapper>
  );
};
