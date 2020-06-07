import React from 'react';

import { Container } from './styles';
import { Transaction } from '..';

interface TransactionItemProps {
  data: Partial<Transaction>;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ data }) => {
  return (
    <Container>
      <small className="title">{data.title}</small>
      <small className={data.type}>{data.formattedValue}</small>
      <small>{data.category?.title}</small>
      <small>{data.formattedDate}</small>
    </Container>
  );
};

export default TransactionItem;
