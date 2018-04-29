import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { address: '' };
                 
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({address: event.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSearchTermChange(this.state.address);
    }

    render() {
        return (     
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Blockchain</a>
                <form className="form-inline"  onSubmit={this.onFormSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Bitcoin address" aria-label="Search" value={this.state.address} onChange={this.onInputChange}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }


}