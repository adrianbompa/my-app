import React, {Component} from 'react';

const SATHOSI = 100000000;

export default class AccountStats extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            if (this.props.balance) {
                const balance = this.props.balance / SATHOSI;
                const totalReceived = this.props.totalReceived / SATHOSI;
                const totalSent = this.props.totalSent / SATHOSI;
                return (
                    <div className="account_stats">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p>Balance</p>
                                </div>
                                <div className="col">
                                    {balance} BTC
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Nr of Transactions</p>
                                </div>
                                <div className="col">
                                    {this.props.nrOfTransactions}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Total Received</p>
                                </div>
                                <div className="col">
                                    {totalReceived} BTC
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>Total Sent</p>
                                </div>
                                <div className="col">
                                    {totalSent} BTC
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return null;
            }
        }
}