import styles from '../TransactionHistory/Transaction.module.css';

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableItem}>{type}</td>
      <td className={styles.tableItem}>{amount}</td>
      <td className={styles.tableItem}>{currency}</td>
    </tr>
  );
};
export default Transaction;
