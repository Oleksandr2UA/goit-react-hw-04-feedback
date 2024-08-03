import { List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <li key={option}>
          <button type="button" onClick={onLeaveFeedback} name={option}>
            {option}
          </button>
        </li>
      ))}
    </List>
  );
};
