import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const reviews = { good, neutral, bad };

  const onBtnClick = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        setGood(prevValue => (prevValue += 1));
        break;
      case 'neutral':
        setNeutral(prevValue => (prevValue += 1));
        break;
      case 'bad':
        setBad(prevValue => (prevValue += 1));
        break;
      default:
        break;
    }
  };

  function countTotalFeedback() {
    const values = Object.values(reviews);
    const total = values.reduce((acc, currValue) => acc + currValue, 0);

    return total;
  }
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total > 0) return (good / total) * 100;
    return null;
  };

  const total = countTotalFeedback();
  const posPercentage = Math.round(countPositiveFeedbackPercentage());
  const options = Object.keys(reviews); // returns array with 'good','neutral','bad'
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onBtnClick} />
      </Section>

      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={posPercentage}
          />
        </Section>
      )}
    </>
  );
};
