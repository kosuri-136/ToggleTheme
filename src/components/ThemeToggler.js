import React, { useState } from 'react';
import styled from 'styled-components';
import { lightTheme, darkTheme } from './GlobalStyles';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ theme }) => theme === lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ theme }) => theme === lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const ThemeToggler = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ToggleButton theme={theme} onClick={toggleTheme}>
      <span role="img" aria-label="Sun">☀️</span>
      <span role="img" aria-label="Moon">🌙</span>
    </ToggleButton>
  );
};

export default ThemeToggler;
