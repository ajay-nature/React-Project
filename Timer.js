import React from 'react';
import useTimer from './useTimer';

const Timer = () => {
  const { elapsedTime, isRunning, startTimer, resetTimer } = useTimer();

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const displayMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const displaySeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${displayMinutes}:${displaySeconds}`;
  };

  return (
    <div>
      <div>
        <span>{formatTime(elapsedTime)}</span>
      </div>
      <div >
        <button onClick={isRunning ? resetTimer : startTimer}>
          {isRunning ? 'Reset Timer' : 'Start Timer'}
        </button>
      </div>
    </div>
  );
};

export default Timer;