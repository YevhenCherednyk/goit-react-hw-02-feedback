import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackContainer, Button } from './FedbackOptions.styled';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackContainer>
      {options.map(option => (
        <Button
          key={nanoid()}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        >
          {option}
        </Button>
      ))}
    </FeedbackContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
