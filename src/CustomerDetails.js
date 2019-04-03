import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getcustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getcustomerDetails(this.props.val)
    }
  }
  

  //Function to Load the customerdetails data from json.
  getcustomerDetails(id) {
      axios.get('assets/samplejson/customer' + id + '.json').then(response => {

      this.setState({customerDetails: response})
    })
  };

  render() {
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.customerDetails.data.Title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Title : {this.state.customerDetails.data.title}</p>
          <p>Year : {this.state.customerDetails.data.Year}</p>
          <p>Type : {this.state.customerDetails.data.Type}</p>
          <p><img className="movieImage" src={this.state.customerDetails.data.Poster}></img></p>
        </Panel.Body>
      </Panel>
    </div>)
  }
}
