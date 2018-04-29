import React from 'react';

const TransactionListItem = ({transaction}) => {

    return (
        <li className="list-group-item">
            <p>Transaction: {transaction.tx_index}</p>
            <p>Time: {transaction.time}</p>
        </li>
    );
};

export default TransactionListItem;