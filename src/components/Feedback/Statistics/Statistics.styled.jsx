import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
`;

export const StatisticsItem = styled.li`
  padding: 15px 20px;
  color: white;
  background-color: ${({ review }) => {
    switch (review) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'grey';
      case 'bad':
        return 'orangered';
      default:
        return 'red';
    }
  }};
  border-radius: 15px;
  cursor: pointer;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    scale 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    opacity: 0.8;
    scale: 1.05;
  }
`;

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StatisticsSum = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 20px;
  color: white;
  background-color: blueviolet;
  border-radius: 15px;

  cursor: pointer;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    scale 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    opacity: 0.8;
    scale: 1.05;
  }
`;
