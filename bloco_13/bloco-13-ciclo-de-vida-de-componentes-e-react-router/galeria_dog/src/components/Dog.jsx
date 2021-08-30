import React, { Component } from 'react';
import ImageDog from './ImageDog';

class Dog extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      imageDog: '',
      loading: true,
    }
  }

  fetchDog = async () => {
    this.setState({ loading: true },
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const url = 'https://dog.ceo/api/breeds/image/random'
      const response = await fetch(url, requestHeaders);
      const apiDog = await response.json();
      
      this.setState({
        loading: false,
        imageDog: apiDog.message,
      });
    });
  }
  
  componentDidMount() {
    this.fetchDog();
  }

  render() {
    const { imageDog, loading } = this.state; 
    const messageLoading = <span><h1>Loading...</h1></span>
    return(
      <div>
        <h1>
          Galeria de cães
        </h1>
        { loading ? messageLoading : <ImageDog imagens={ imageDog } /> }
        <button onClick={ this.fetchDog }>Adicionar nova imagem</button>
      </div>  
    );
  }
}

export default Dog;
