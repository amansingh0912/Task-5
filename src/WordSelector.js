import React, { useState } from 'react';
import './WordSelector.css';

const WordSelector = ({ question, sentence, correctWords }) => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('');

  const words = sentence.split(' ');

  const handleWordClick = (word) => {
    setSelectedWords(prevSelectedWords =>
      prevSelectedWords.includes(word)
        ? prevSelectedWords.filter(w => w !== word)
        : [...prevSelectedWords, word]
    );
  };

  const handleSubmit = () => {
    const isCorrect = correctWords.every(word => selectedWords.includes(word)) &&
                      correctWords.length === selectedWords.length;
    if (isCorrect) {
      setFeedback('Your selection is correct');
      setFeedbackType('success');
    } else {
      setFeedback(`Your selection is incorrect. The correct word(s) are ${correctWords.join(', ')}`);
      setFeedbackType('error');
    }
  };

  const handleReset = () => {
    setSelectedWords([]);
    setFeedback('');
    setFeedbackType('');
  };

  return (
    <div className="word-selector">
      <h3>{question}</h3>
      {feedback && (
        <div className={`feedback ${feedbackType}`}>
          {feedback}
        </div>
      )}
      <div className="sentence">
        {words.map((word, index) => (
          <span
            key={index}
            className={`word ${selectedWords.includes(word) ? 'selected' : ''}`}
            onClick={() => handleWordClick(word)}
          >
            {word}
          </span>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default WordSelector;
