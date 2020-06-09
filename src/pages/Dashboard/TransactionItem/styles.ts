import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 10px;

  small {
    padding: 20px 32px;
    border: 0;
    background: ${props =>
      props.theme.colors.pages.dashboard.dashboard_item.background};
    font-size: 16px;
    font-weight: normal;
    color: ${props => props.theme.colors.text};
    text-align: left;

    &.title {
      color: ${props =>
        props.theme.colors.pages.dashboard.dashboard_item.title_color};
    }

    &.income {
      color: ${props =>
        props.theme.colors.pages.dashboard.dashboard_item.income_color};
    }

    &.outcome {
      color: ${props =>
        props.theme.colors.pages.dashboard.dashboard_item.outcome_color};
    }
  }

  small:first-child {
    border-radius: 8px 0 0 8px;
  }

  small:last-child {
    border-radius: 0 8px 8px 0;
  }
`;
