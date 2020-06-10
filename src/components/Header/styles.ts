import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface LinkWithSeletedProps extends LinkProps {
  selected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.primary};
  padding: 30px 0;
  display: flex;
  justify-content: space-between;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  div {
    margin-right: 30px;
  }
`;

export const LinkWithSeleted = styled(Link)<LinkWithSeletedProps>`
  ${props =>
    props.selected === true &&
    css`
      padding-bottom: 10px;
      border-bottom: 1px solid ${props.theme.colors.secondary};
    `}
`;
