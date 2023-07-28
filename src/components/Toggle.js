import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Moon } from '../icons/moon.svg'; // Replace 'moon.svg' with the correct path
import { ReactComponent as Sun } from '../icons/sun.svg'; // Replace 'sun.svg' with the correct path

const ToggleContainer = styled.button`
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

  .circle {
    position: absolute;
    top: 1;
    left: ${({ lightTheme }) => (lightTheme ? '0' : '50%')};
    width: 3.2rem;
    height: 3.1rem;
    border-radius: 60%;
    transform: translate(10%, -5%);
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    background-color: ${({ theme }) => theme.toggleBorder};
    transition: left 0.3s linear;
  }



  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    &:first-child {
      
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }

    &:nth-child(2) {
     

      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
       <div className="circle" />
      
      <Moon />
      <Sun />
     
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;
