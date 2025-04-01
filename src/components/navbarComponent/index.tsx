import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../assets/style/color'
import { useTheme } from '../../context/themeProvider'

interface IProps {
  // You can add props here if needed
}

const HeaderStyled = styled.header<{
  backgroundColor?: string
  color?: string
}>`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  z-index: 9999 !important;
  background-color: ${({ backgroundColor, theme }) => 
    backgroundColor || theme?.background || 'transparent'};
    color:  ${({ theme }) =>  theme?.text || 'black'};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: space-between;
  width: 100%;
`

const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 60%;
    background-color: ${colors.primary};
    flex-direction: column;
    justify-content: center;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => 
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
    z-index: 100;
  }
`

const NavLink = styled.a`
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }
`

const Hamburger = styled.div<{ $isOpen: boolean }>`
  width: 25px;
  height: 2px;
  background-color: white;
  position: relative;
  transition: all 0.3s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(8px);
  }

  ${({ $isOpen }) => $isOpen && `
    background-color: transparent;
    
    &::before {
      transform: rotate(45deg);
    }
    
    &::after {
      transform: rotate(-45deg);
    }
  `}
`

const ThemeToggleButton = styled.button`
  background: ${props => props.theme.secondary};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  margin: 0 1rem;
  overflow: hidden;
  padding: 0.3rem;
  position: relative;
  width: 48px;
  height: 24px;
  transition: background 0.3s ease;
`;

const ToggleThumb = styled.div<{ $isDarkMode: boolean }>`
  background: ${props => props.theme.text};
  border-radius: 50%;
  height: 18px;
  left: ${props => (props.$isDarkMode ? 'calc(100% - 20px)' : '3px')};
  position: absolute;
  top: 3px;
  transition: all 0.3s ease;
  width: 18px;
`;

export const NavbarComponent: React.FC<IProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <HeaderStyled>
      <Logo>Your Logo</Logo>
    
    <NavStyled>
      <NavLinks isOpen={isMenuOpen}>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Contact</NavLink>
        <ThemeToggleButton 
          onClick={toggleTheme}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
          <ToggleThumb $isDarkMode={isDarkMode} />
        </ThemeToggleButton>
      </NavLinks>

      <MobileMenuButton 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <Hamburger $isOpen={isMenuOpen} />
      </MobileMenuButton>
    </NavStyled>
    </HeaderStyled>
  );
};