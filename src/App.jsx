import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";

const cardValues = [
  "🍎",
  "🍏",
  "🍍",
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍌",
  "🍎",
  "🍏",
  "🍍",
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍌",
];
function App() {
  const [cards, setCards] = useState([]);

  const initializeGame = () => {
    //shuffle the CARDS

    const finalCards = cardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCards);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    // Don't allow clicking if card is already flipped
    if (card.isFlipped || card.isMatched) {
      return;
    }

    //update card flipped state
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);
  };

  return (
    <div className="app">
      <GameHeader score={3} moves={10} />

      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}
export default App;
