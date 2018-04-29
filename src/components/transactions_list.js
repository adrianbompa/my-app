import React, {Component} from 'react';
import TransactionListItem from './transaction_list_item.js';

const TransactionsList = (props) => {
    const transactionItems = props.transactions.map((transaction) => {
        return (
            <TransactionListItem   
                transaction={transaction}
                key={transaction.tx_index}
            />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {transactionItems}
        </ul>
    );

};

export default TransactionsList;