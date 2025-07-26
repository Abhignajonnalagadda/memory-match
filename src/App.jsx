import { useMemo } from "react";
import Tile from "./components/Tile";
import "./App.css";

function App() {
  const level = 18;
  const icecreams = [
    "src/assets/butterscotch.png",
    "src/assets/icecream-with-cherry.png",
    "src/assets/icecream-with-toppings.png",
    "src/assets/naughty-icecream.png",
    "src/assets/strawberry-icecream.png",
    "src/assets/triple-icecream.png",
    "src/assets/twin-icecream.png",
    "src/assets/vanilla-with-strawberry.png",
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const tiles = useMemo(() => {
    const pairs = [];
    while (pairs.length < level) {
      const img = icecreams[Math.floor(Math.random() * icecreams.length)];
      const gotMatch = false;
      pairs.push({img, display, gotMatch});
    }
    return shuffle([...pairs, ...pairs]);
  }, [icecreams, level]);

  const gridSize = Math.ceil(Math.sqrt(tiles.length));

  return (
    <div className="h-screen w-screen flex flex-col">
      <h1 className="text-white text-center text-6xl mt-30">Memory Match</h1>
      <div className="h-full w-full flex items-center justify-center">
        <div
          className="h-[500px] w-[500px] grid gap-2"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          }}
        >
          {tiles.map((tile, ind) => (
            <Tile tile={tile} key={ind} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
