import React from 'react';

import { useLocation } from 'react-router-dom';
import { Container, LinkWithSeleted } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation();

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
    </Container>
  );
};

export default Header;
