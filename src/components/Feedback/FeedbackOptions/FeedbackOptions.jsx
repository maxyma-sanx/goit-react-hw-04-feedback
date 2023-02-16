import PropTypes from 'prop-types';

import {
  FeedbackList,
  FeedbackItem,
  FeedbackBtn,
} from './FeedbackOptions.styled';

import {
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiAngryFill,
} from 'react-icons/bs';

const icons = [
  <BsFillEmojiSmileFill size={25} color="green" />,
  <BsFillEmojiNeutralFill size={25} color="grey" />,
  <BsFillEmojiAngryFill size={25} color="orangered" />,
];

export const FeedbackOptions = ({ options, increment }) => (
  <FeedbackList>
    {options.map((label, index) => (
      <FeedbackItem key={label}>
        <FeedbackBtn type="button" name={label} onClick={increment}>
          {icons[index]}
          {label[0].toUpperCase() + label.slice(1)}
        </FeedbackBtn>
      </FeedbackItem>
    ))}
  </FeedbackList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  increment: PropTypes.func.isRequired,
};
