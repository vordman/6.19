import React from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

async function callDogApi() {
  return await axios.get("https://dog.ceo/api/breeds/image/random")
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      image: ""
    }
  }
  componentDidMount(){
    callDogApi().then(result => this.setState({
      image: result.data.message
    }))
  }
  render(){
    return <PhotoCard image={this.state.image} />
  }
  }

export default App;
