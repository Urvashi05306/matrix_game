import { useState } from "react";
import "./MatrixGame.css"; 

export default function MatrixGame() {
  const [grid, setGrid] = useState(Array(9).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (grid[index] !== "white") return;

    let newGrid = [...grid];
    newGrid[index] = "green";
    setGrid(newGrid);

    let newClickOrder = [...clickOrder, index];
    setClickOrder(newClickOrder);

    if (newClickOrder.length === 9) {
      setTimeout(() => changeToOrange(newClickOrder), 500);
    }
  };

  const changeToOrange = (order) => {
    let newGrid = [...grid];
    order.forEach((idx, i) => {
      setTimeout(() => {
        newGrid[idx] = "orange";
        setGrid([...newGrid]);
      }, i * 500);
    });
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="title">Matrix Click Game</h1>
      <div className="grid-container">
        {grid.map((color, i) => (
          <div
            key={i}
            className="grid-box"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(i)}
          >
            {clickOrder.includes(i) ? clickOrder.indexOf(i) + 1 : ""}
          </div>
        ))}
      </div>
      <button className="reset-btn" onClick={() => { setGrid(Array(9).fill("white")); setClickOrder([]); }}>
        Reset Game
      </button>
    </div>
  );
}
