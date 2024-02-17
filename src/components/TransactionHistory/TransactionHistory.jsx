import css from './TransactionHistory.module.css';

export default function TransactionHistory({items}) {
  return (
    <table className={css.transactionTable}>
      <thead className={css.transactionTableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.transactionTableBody}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={css.transactionTableColumn}>
              <td className={css.transactionTableRow}>{item.type}</td>
              <td className={css.transactionTableRow}>{item.amount}</td>
              <td className={css.transactionTableRow}>{item.currency}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}