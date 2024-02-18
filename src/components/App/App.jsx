import { useState, useEffect } from 'react';

import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
const KEY = "saved-feedbacks";

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem(KEY);
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });

  function updateGoodFeedback() {
    setFeedbacks({
      ...feedbacks,
      good: feedbacks.good + 1
    });
  }

  function updateNeutralFeedback() {
    setFeedbacks({
      ...feedbacks,
      neutral: feedbacks.neutral + 1
    });
  }

  function updateBadFeedback() {
    setFeedbacks({
      ...feedbacks,
      bad: feedbacks.bad + 1
    });
  }  

  function resetFeedbacks() {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  function updateFeedback(feedbackType) {
    switch(feedbackType) {
      case 'good':
        updateGoodFeedback();
        break;
      
      case 'neutral':
        updateNeutralFeedback();
        break;

      case 'bad':
        updateBadFeedback();
        break;

      default: console.log('something is wrong!');
    }
  }

  const totalFeedbacks = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedbacks = Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedbacks) * 100);

  useEffect(() => {
    window.localStorage.setItem(KEY, JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <>
      <Description />
      <Options 
        feedbacks={feedbacks} 
        onUpdate={updateFeedback} 
        onReset={resetFeedbacks}
        totalFeedbacks={totalFeedbacks}
      />
      {totalFeedbacks > 0 
        ? 
        <Feedback 
          feedbacks={feedbacks} 
          totalFeedbacks={totalFeedbacks} 
          positiveFeedbacks={positiveFeedbacks}/>
        :
        <p>No feedback yet</p>
      }
    </>
  )
}


