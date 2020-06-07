import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import totalSvg from '../../assets/total.svg';

import api from '../../services/api';

import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';

import {
  Container,
  CardContainer,
  Card,
  BalanceInfoPlaceholder,
  TableGrid,
} from './styles';
import TransactionItem from './TransactionItem';

export interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: string;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

interface TransactionsWithBalance {
  transactions: Transaction[];
  balance: Balance;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      setLoading(true);

      const response = await api.get<TransactionsWithBalance>('/transactions');

      const transactionsFormatted = response.data.transactions.map(
        transaction => {
          return {
            ...transaction,
            formattedDate: format(
              parseISO(transaction.created_at),
              "dd'/'MM'/'yyyy",
            ),
            formattedValue:
              transaction.type === 'income'
                ? formatValue(transaction.value)
                : `- ${formatValue(transaction.value)}`,
          };
        },
      );

      const { income, outcome, total } = response.data.balance;

      const balanceFormatted: Balance = {
        income: formatValue(Number(income)),
        outcome: formatValue(Number(outcome)),
        total: formatValue(Number(total)),
      };

      setTransactions(transactionsFormatted);
      setBalance(balanceFormatted);

      setLoading(false);
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={incomeSvg} alt="Income" />
            </header>
            <BalanceInfoPlaceholder
              showLoadingAnimation
              type="textRow"
              ready={!loading}
              rows={4}
            >
              <h1 data-testid="balance-income">{balance.income}</h1>
            </BalanceInfoPlaceholder>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={outcomeSvg} alt="Outcome" />
            </header>
            <BalanceInfoPlaceholder
              showLoadingAnimation
              type="textRow"
              ready={!loading}
              rows={4}
            >
              <h1 data-testid="balance-outcome">{balance.outcome}</h1>
            </BalanceInfoPlaceholder>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src={totalSvg} alt="Total" />
            </header>
            <BalanceInfoPlaceholder
              showLoadingAnimation
              type="textRow"
              ready={!loading}
              rows={4}
            >
              <h1 data-testid="balance-total">{balance.total}</h1>
            </BalanceInfoPlaceholder>
          </Card>
        </CardContainer>

        <TableGrid>
          <section>
            <strong>Título</strong>
            <strong>Preço</strong>
            <strong>Categoria</strong>
            <strong>Data</strong>
          </section>
          {transactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
              data={{
                title: transaction.title,
                type: transaction.type,
                formattedValue: transaction.formattedValue,
                formattedDate: transaction.formattedDate,
                category: { title: transaction.category.title },
              }}
            />
          ))}
          {/* <TransactionItem
            data={{
              title: 'Computer',
              type: 'income',
              formattedValue: 'R$ 5.000,00',
              formattedDate: '20/04/2020',
              category: { title: 'Sell' },
            }}
          />

          <TransactionItem
            data={{
              title: 'Website Hosting',
              type: 'outcome',
              formattedValue: '- R$ 1.000,00',
              formattedDate: '19/04/2020',
              category: { title: 'Hosting' },
            }}
          /> */}
        </TableGrid>
      </Container>
    </>
  );
};

export default Dashboard;
