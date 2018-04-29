import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import SearchBar from './components/search_bar';
import AccountStats from './components/account_status';
import TransactionsList from './components/transactions_list';
import SpinnerDisplay from './components/spinner'

const ROOT_URL = 'https://cors.io/?https://testnet.blockchain.info/address/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: '',
      n_tx: '',
      total_received: '',
      total_sent: '',
      spinner: false,
      transactions: []
    }

    this.addressSearch = this.addressSearch.bind(this);
  }

  addressSearch(address) {
    this.setState({spinner: true});
    const URL = `${ROOT_URL}${address}?format=json&cors=true`;
    axios
        .get(URL)
        .then(({data}) => {
            this.setState({
              balance: data.final_balance,
              n_tx: data.n_tx,
              total_received: data.total_received,
              total_sent: data.total_sent,
              transactions: data.txs,
              spinner:false
            })
        })
        .catch((err)=> {});   
  }  

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.addressSearch} />
        <SpinnerDisplay show={this.state.spinner}/>

        <AccountStats 
          balance={this.state.balance}
          nrOfTransactions={this.state.n_tx}
          totalReceived={this.state.total_received}
          totalSent={this.state.total_sent}
        />

        <TransactionsList transactions={this.state.transactions}/>
        
      </div>
    );
  }
}

export default App;
