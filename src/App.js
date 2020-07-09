import React, { Component } from 'react';
import styled from 'styled-components';

import sprite from './img/sprite.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Map = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
  background-color: green;
`;

const Person = styled.div`
  position: absolute;
  top: ${props => props.position[1]}px;
  left: ${props => props.position[0]}px;
  width: 35px;
  height: 35px;

  background: url(${sprite});
  background-position: 0 0;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: [0, 0]
    };
  }

  render() {
    const { position } = this.state;

    return (
      <Container>
      <Map>
        <Person position={position} />
      </Map>
      </Container>
    );
  }
}

export default App;
