import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-bottom: 30px;
`;

export const FeedbackItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FeedbackBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  outline: none;
  border: none;

  font-weight: 600;
  padding: 10px 20px;
  background: #fff0f0;
  border: 2px solid #b18597;
  border-radius: 0.75em;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9c4d2;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #b18597, 0 0.425em 0 0 #ffe3e2;
    transform: translate3d(0, 0.5em, -1em);
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :hover {
    background: #ffe9e9;
    transform: translate(0, 0.25em);
  }

  :hover::before {
    box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
    transform: translate3d(0, 0.5em, -1em);
  }

  :active {
    background: #ffe9e9;
    transform: translate(0em, 0.75em);
  }

  :active::before {
    box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    transform: translate3d(0, 0, -1em);
  }
`;
