import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import confetti from "canvas-confetti";
import '../styles/tictactoe.css';
import PropTypes from "prop-types";
import { setOnAbout } from "../redux/projectSlice";

const Square = ({ children, updateBoard, isSelected, index }) => {
  const className = `square inline text-3xl w-16 h-16 border-4 border-myGray rounded-md cursor-pointer
                    grid place-items-center ${isSelected ? `bg-myGreen opacity-80` : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

Square.propTypes = {
  children: PropTypes.node,
  updateBoard: PropTypes.func,
  isSelected: PropTypes.bool,
  index: PropTypes.number,
};

function TicTacToe() {
  const dispatch = useDispatch();
  const { ref: refAbout, inView: inViewAbout} = useInView();
  const turns = {
    X: "❌",
    O: "⭕",
  };

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(turns.X);
  const [winner, setWinner] = useState(null);
  const [isGameInProgress, setIsGameInProgress] = useState(true);

  const winnerCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  const checkWinner = (boardCheck) => {
    for (let i of winnerCombos) {
      const [a, b, c] = i;
      if (
        boardCheck[a] &&
        boardCheck[a] === boardCheck[b] &&
        boardCheck[a] === boardCheck[c]
      ) {
        return boardCheck[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(turns.X);
    setWinner(null);
    setIsGameInProgress(true);
  };

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  useEffect(() => {
    const performComputerMove = () => {
      if (turn === turns.O && isGameInProgress) {
        const emptySquares = board.reduce((acc, val, idx) => {
          if (val === null) acc.push(idx);
          return acc;
        }, []);

        if (emptySquares.length > 0) {
          const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
          updateBoard(randomIndex);
        }
      }
    };
    setTimeout(() => {
        performComputerMove();
    }, 700);
  }, [board, turn, isGameInProgress, turns.O]);

  const updateBoard = (index) => {
    if (board[index] || winner || !isGameInProgress) return;

    const newBoard = [...board];
    newBoard[index] = turn;

    setBoard(newBoard);

    const newTurn = turn === turns.X ? turns.O : turns.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner);
      setIsGameInProgress(false); 
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  useEffect(() => {
    dispatch(setOnAbout(inViewAbout));  
  }, [inViewAbout, dispatch]);

  return (
    <section className="absolute md:static bottom-[-800px] bg-myYellow md:bg-transparent w-full md: h-screen mb-14 md:ml-[23%] lg:ml-[17%] 2xl:ml-[23%]" id="playGround">
      <h2 className="text-4xl md:text-5xl font-extrabold mt-14">PlayGround</h2>
      <div ref={refAbout} className="flex mt-10 justify-center">
        <h3 className="text-3xl font-bold text-myBlue -rotate-12">It&apos;s your turn !</h3>
        <div>
          <p className="text-xl md:text-2xl font-bold text-myBlue rotate-12 a&apos;nimate-pulse curs">Come on is easy !</p>
          <p className="text-xl md:text-2xl font-bold text-myBlue rotate-12 animate-pulse-slow">Good Luck !</p>
        </div>
      </div>
      <div className="grid place-content-center">
        <div className="grid grid-cols-3 gap-3 my-10 place-items-center ">
          {board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            );
          })}
        </div>
      </div>
      <div className="flex p-6 text-2xl justify-center">
        <Square isSelected={turn === turns.X}>{turns.X}</Square>
        <Square isSelected={turn === turns.O}>{turns.O}</Square>
      </div>
      <button type="button" onClick={resetGame} className="bg-myYellow p-4 w-2/4 md:w-1/4 font-bold active:bg-myGray active:text-white
      shadow-myShadow border border-myGray hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">Reset Game</button>

      {winner !== null && (
        <div className="fixed w-full h-screen top-0 left-0 grid place-items-center bg-myBlue z-50 opacity-90">
          <div className="text-4xl text-myYellow flex flex-col justify-around h-3/6">
            <h2> {winner === false ? "Tie" : "Winner :"} </h2>

            <header className="win">
              {winner && <Square >{winner}</Square>}
            </header>
            <footer>
              <button className="mt-20 p-5 rounded cursor-pointer" onClick={resetGame}>Start New Game</button>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
}

export default TicTacToe;