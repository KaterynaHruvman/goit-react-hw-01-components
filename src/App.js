import React from 'react';
import Profile from './components/Profile/Profile';
import user from './user.json';
import statistic from './statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './friends.json';
import FriendList from './components/FriendsList/FriendList';
import transactions from './transaction.json';
import TransactionHistory from './components/TransactionHistory/TransactinHistory';
import Container from './components/Container/Container';

export default function App() {
  return (
    <Container>
      <Profile user={user} />
      <Statistics stats={statistic} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
