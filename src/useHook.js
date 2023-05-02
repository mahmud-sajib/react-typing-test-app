import { useEffect, useRef, useState } from "react";

// Using a custom hook
const useHook = () => {
  // The initial time for the typing test
  const START_TIME = 5;

  // The current text in the textarea
  const [text, setText] = useState("");

  // Check whether the typing test is currently running
  const [isGameRunning, setIsGameRunning] = useState(false);

  // The number of words in the text
  const [wordCount, setWordCount] = useState(0);

  // The time remaining for the typing test
  const [isTimeRemaining, setIsTimeRemaining] = useState(START_TIME);

  // A reference to the textarea element
  const inputRef = useRef(null);

  // Event handler for when the user types in the textarea
  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  // Calculates the number of words in the current text
  const calculateWordCount = () => {
    const wordArr = text.split(" ");
    const numWords = wordArr.filter((word) => word !== "").length;
    setWordCount(numWords);
  };

  // Starts the typing test
  const startGame = () => {
    setIsGameRunning(true);
    setIsTimeRemaining(START_TIME);
    setText("");
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  // Ends the typing test
  const endGame = () => {
    setIsGameRunning(false);
  };

  // Runs every time the isTimeRemaining or isGameRunning state changes
  useEffect(() => {
    if (isTimeRemaining > 0 && isGameRunning) {
      setTimeout(() => {
        setIsTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      endGame();
    }
    calculateWordCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimeRemaining, isGameRunning]);

  return [
    text,
    isGameRunning,
    wordCount,
    isTimeRemaining,
    inputRef,
    handleChange,
    startGame,
  ];
};

export default useHook;
