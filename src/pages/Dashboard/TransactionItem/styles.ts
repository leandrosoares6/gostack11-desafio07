import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 10px;

  small {
    padding: 20px 32px;
    border: 0;
    background: #fff;
    font-size: 16px;
    font-weight: normal;
    color: #969cb3;
    text-align: left;

    &.title {
      color: #363f5f;
    }

    &.income {
      color: #12a454;
    }

    &.outcome {
      color: #e83f5b;
    }
  }

  small:first-child {
    border-radius: 8px 0 0 8px;
  }

  small:last-child {
    border-radius: 0 8px 8px 0;
  }
`;
