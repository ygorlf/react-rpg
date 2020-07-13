import React, { Component } from 'react';
import styled from 'styled-components';

import sprite from './img/sprite.png';
import grass from './img/grass.png';
import dirt3 from './img/dirt3.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  outline: none;
  background-image: url(${dirt3});
  background-repeat: repeat, repeat;
  background-color: #ba8044;
  background-position: -7px 10px;
  background-size: 140px;
`;

const Map = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
  background-image: url(${grass}), linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-repeat: repeat, repeat;
  background-size: 30px;
  outline: none;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;

const Person = styled.div`
  position: absolute;
  top: ${props => props.position[1]}px;
  left: ${props => props.position[0]}px;
  width: 35px;
  height: 35px;

  background: url(${sprite});
  background-position: ${props => props.positionPerson};
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: [0, 0],
      positionPerson: '0 0',
    };
  }

  handleUp = (ev) => {
    const { position } = this.state;

    const firstPosition = position[0];
    const secondPosition = position[position.length - 1];

    switch (ev.keyCode) {
      case 38:
      case 56:
      case 87:
      case 104:
        return this.setState({
          position:
            [firstPosition, (secondPosition > 1)
              ? secondPosition - 35
              : secondPosition],
          positionPerson: '0 -73px',
        })
      case 37:
      case 52:
      case 65:
      case 100:
        return this.setState({
          position:
            [(firstPosition > 1)
              ? firstPosition - 35
              : firstPosition, secondPosition],
          positionPerson: '0 37px',
        })
      case 40:
      case 50:
      case 83:
      case 98:
        return this.setState({
          position:
            [firstPosition, (secondPosition > 660)
              ? secondPosition
              : secondPosition + 35],
          positionPerson: '0 0',
        })
      case 39:
      case 54:
      case 68:
      case 102:
        return this.setState({
          position:
            [(firstPosition > 660)
              ? firstPosition
              : firstPosition + 35, secondPosition],
          positionPerson: '0 -37px',
        })
      default:
        return 0
    }
  }

  render() {
    const { position, positionPerson } = this.state;

    return (
      <Container autofocus="autofocus" tabIndex="1" onKeyUp={(ev) => this.handleUp(ev)}>
        <Map>
          <Person position={position} positionPerson={positionPerson} />
        </Map>
      </Container>
    );
  }
}

export default App;
