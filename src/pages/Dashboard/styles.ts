import styled, { ThemeProps, DefaultTheme } from 'styled-components';

import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

interface CardProps extends ThemeProps<DefaultTheme> {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.colors.pages.dashboard.title_color};
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  background: ${({ total, theme }: CardProps): string =>
    total
      ? `${theme.colors.pages.dashboard.cards.background_total}`
      : `${theme.colors.pages.dashboard.cards.background}`};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total, theme }: CardProps): string =>
    total
      ? `${theme.colors.pages.dashboard.cards.color_total}`
      : `${theme.colors.pages.dashboard.cards.color}`};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const BalanceInfoPlaceholder = styled(ReactPlaceholder)`
  margin-top: 14px;
  font-size: 36px;
  font-weight: normal;
  line-height: 54px;
  border-radius: 5px;
`;

export const TableGrid = styled.div`
  margin-top: 64px;

  > section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    strong {
      color: ${props => props.theme.colors.text};
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
