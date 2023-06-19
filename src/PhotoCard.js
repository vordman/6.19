import React from 'react';

class PhotoCard extends React.Component{
    render(){
        return <img src={this.props.image} alt="갱얼쥐"
        width="500" height="300"
        />
    }
}

export default PhotoCard;

