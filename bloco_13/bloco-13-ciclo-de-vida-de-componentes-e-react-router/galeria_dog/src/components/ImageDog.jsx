import React, { Component } from 'react';

class ImageDog extends Component {
  render(){
    const { imagens } = this.props;
    return(
      <img 
        src={ imagens } 
        alt="Imagem de cachorro" 
        width="300px" 
        height="300px" 
      />
    );
  }
}

export default ImageDog;
