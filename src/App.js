import React from 'react';
import WordSelector from './WordSelector';
import './WordSelector.css';
import './App.css'
const App = () => {
  const question = "Select the adjectives in the sentence.";
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const correctWords = ["quick", "lazy"];

  return (
    <div className="App">
    <div>
      <WordSelector
        question={question}
        sentence={sentence}
        correctWords={correctWords}
      />
      </div>
    </div>
  );
};
export default App;
