import PropTypes from 'prop-types';

import {
  StatisticsList,
  StatisticsItem,
  StatisticsContainer,
  StatisticsSum,
} from './Statistics.styled';
import { FaChartLine, FaUser } from 'react-icons/fa';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <StatisticsList>
      <StatisticsItem review="good">
        <p>Good: {good}</p>
      </StatisticsItem>
      <StatisticsItem review="neutral">
        <p>Neutral: {neutral}</p>
      </StatisticsItem>
      <StatisticsItem review="bad">
        <p>Bad: {bad}</p>
      </StatisticsItem>
    </StatisticsList>
    <StatisticsContainer>
      <StatisticsSum>
        <FaUser size={15} />
        Total: {total}
      </StatisticsSum>
      <StatisticsSum>
        <FaChartLine size={20} />
        Positive feedback: {positivePercentage}%
      </StatisticsSum>
    </StatisticsContainer>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
