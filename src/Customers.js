import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'
import axios from 'axios'

export default class Customers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1,
      searchKey: ''
    }

  }
  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    axios.get('assets/samplejson/customerlist.json').then(response => {
      this.setState({ customerList: response })
    })
  };

  getSearchData = (e) => {
    this.setState({
      searchKey: e.target.value,
    });
  };
  onSubmit = () => {
  }

  render() {  
    if (!this.state.customerList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">

      <div className="col-md-3">
        <form className="App" onSubmit={this.onSubmit}>
          <input type="text" id="my-text-field" value={this.state.srch} onChange={this.getSearchData} className="mdc-text-field__input search" placeholder=" Enter Movie Name"></input>
          <Button className="srchButton" onClick={this.onSubmit} >Search</Button>
        </form>
        {this.state.customerList.data.filter((customer) => {return customer.title.indexOf(this.state.searchKey)!==-1;})
                                              .map(customer => <Panel bsStyle="info" key={customer.title} className="centeralign">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{customer.title}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>{customer.email}</p>
            <p><img className="listImg" src={customer.Poster}></img></p>
            <Button bsStyle="info" onClick={() => this.setState({ selectedCustomer: customer.id })}>

              Click to View Details

              </Button>

          </Panel.Body>
        </Panel>)
        }
      </div>
      <div className="col-md-6">
        <CustomerDetails val={this.state.selectedCustomer} />
      </div>
    </div>)
  }

}
