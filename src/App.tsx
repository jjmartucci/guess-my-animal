import "./styles.css";
import Card from "./components/Card/Card";
import data from "./data";
import styles from "./App.module.css";
import { useState } from "react";

const myCard = data[Math.floor(Math.random() * data.length)];

export default function App() {
  const [dropped, setDropped] = useState<Array<string>>([]);

  const toggleCard = (name: string) => {
    const index = dropped.indexOf(name);
    if (index > -1) {
      const copy = [...dropped];
      copy.splice(index, 1);
      setDropped(copy);
    } else {
      setDropped([name, ...dropped]);
    }
  };

  return (
    <div className={styles.App}>
      <div>
        <Card name={myCard.name} image={myCard.image} />
        <button
          onClick={() => window.location.reload()}
          className={styles.NewGame}
        >
          New Game
        </button>
      </div>
      <div className={styles.Cards}>
        {data.map((item) => {
          return (
            <div className={styles.CardWrapper}>
              <Card
                name={item.name}
                image={item.image}
                key={item.name}
                onClick={toggleCard}
                dropped={dropped.indexOf(item.name) > -1}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
