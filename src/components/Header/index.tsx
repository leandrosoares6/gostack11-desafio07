import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/theme';
import { Container, LinkWithSeleted } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation();

  const { toggleTheme } = useTheme();

  const { colors, title } = useContext(ThemeContext);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <LinkWithSeleted selected={location.pathname === '/'} to="/">
            Listagem
          </LinkWithSeleted>
          <LinkWithSeleted
            selected={location.pathname === '/import'}
            to="/import"
          >
            Importar
          </LinkWithSeleted>
        </nav>
      </header>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.2, colors.pages.dashboard.cards.background_total)}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;
