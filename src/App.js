// Import the CSS file for the component
import "./App.css";
// Import the custom hook
import useHook from "./useHook";

// Define the App component
function App() {
  // Call the useHook custom hook to get the necessary state and functions
  const [
    text, // The current text in the textarea
    isGameRunning, // Whether the typing test is currently running
    wordCount, // The number of words in the text
    isTimeRemaining, // The time remaining for the typing test
    inputRef, // A reference to the textarea element
    handleChange, // Event handler for when the user types in the textarea
    startGame, // Function to start the typing test
  ] = useHook();

  // The JSX for the component
  return (
    <>
      <h1>Speed Typing Test</h1>
      <form>
        <textarea
          ref={inputRef} // Set the reference to the textarea element
          disabled={!isGameRunning} // Disable the textarea if the game is not running
          value={text} // Set the value of the textarea to the current text state
          onChange={handleChange} // Set the event handler for when the user types in the textarea
        />
      </form>
      <h4>Time Remaining : {isTimeRemaining} seconds</h4>
      <button type="button" onClick={startGame} disabled={isGameRunning}>
        Start Typing
      </button>
      <h1>{text}</h1>
      <h1>Word Count: {wordCount} </h1>
    </>
  );
}

export default App; // Export the App component
