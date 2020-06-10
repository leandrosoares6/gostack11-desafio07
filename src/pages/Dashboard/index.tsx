import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';

import { SkeletonTheme } from 'react-loading-skeleton';

import { lighten, shade } from 'polished';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import totalSvg from '../../assets/total.svg';

import api from '../../services/api';

import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';

import { useTheme } from '../../hooks/theme';

import {
  Container,
  CardContainer,
  CardSkeleton,
  Card,
  BalanceInfoPlaceholder,
  TableGrid,
  TransactionItemSkeleton,
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

  const { theme } = useTheme();
  const { colors } = theme;

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

      setTimeout(() => {
        setLoading(false);
      }, 1700);
    }

    loadTransactions();
  }, []);

  return (
    <SkeletonTheme
      color={
        theme.title === 'light'
          ? shade(0.08, colors.pages.dashboard.cards.background)
          : colors.pages.dashboard.cards.background
      }
      highlightColor={lighten(0.05, colors.pages.dashboard.cards.background)}
    >
      <Header />
      <Container>
        <CardContainer>
          {loading === true ? (
            <CardSkeleton duration={2} />
          ) : (
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
          )}

          {loading === true ? (
            <CardSkeleton duration={2} />
          ) : (
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
          )}

          {loading === true ? (
            <CardSkeleton duration={2} />
          ) : (
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
          )}
        </CardContainer>

        <TableGrid>
          <section>
            <strong>Título</strong>
            <strong>Preço</strong>
            <strong>Categoria</strong>
            <strong>Data</strong>
          </section>

          {loading === true ? (
            <TransactionItemSkeleton duration={2} count={3} />
          ) : (
            transactions.map(transaction => (
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
            ))
          )}
        </TableGrid>
      </Container>
    </SkeletonTheme>
  );
};

export default Dashboard;
