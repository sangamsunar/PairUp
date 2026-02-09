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

  return (
    <div className="app">
      <GameHeader score={3} moves={10} />

      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}
export default App;
