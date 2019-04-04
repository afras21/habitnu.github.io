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
        <div className="col-md-3">
        <p><img className="movieImage" src={this.state.customerDetails.data.Poster}></img></p>

        </div>
        <div className="col-md-2">

        </div>
        <div className="col-md-3">


        <p><strong>Title    :</strong> {this.state.customerDetails.data.Title}</p>
          <p><strong>Year          : </strong>{this.state.customerDetails.data.Year}</p>
          <p><strong>Released Date</strong>  : {this.state.customerDetails.data.Released}</p>
          <p><strong>Director       :</strong> {this.state.customerDetails.data.Director}</p>
          <p><strong>Actors         :</strong> {this.state.customerDetails.data.Actors}</p>
        </div>



        </Panel.Body>
      </Panel>
    </div>)
  }
}
// "Rated": "PG-13",
// "Released": "25 Dec 2009",
// "Runtime": "170 min",
// "Genre": "Comedy, Drama",
// "Director": "Rajkumar Hirani",
// "Writer": "Rajkumar Hirani (screenplay), Abhijat Joshi (screenplay), Vidhu Vinod Chopra (screenplay associate), Abhijat Joshi (story), Chetan Bhagat (novel)",
// "Actors": "Aamir Khan, Madhavan, Sharman Joshi, Kareena Kapoor",
// "Plot": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\".",
// "Language": "Hindi, English",
// "Country": "India",
// "Awards": "26 wins & 13 nominations.",