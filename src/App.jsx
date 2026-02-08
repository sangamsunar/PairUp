import { useState } from "react";
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

  const initializeGame = () => {};

  return (
    <div className="app">
      <GameHeader score={3} moves={10} />

      <div className="cards-grid">
        {cardValues.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}
export default App;
