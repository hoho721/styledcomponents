import React, {Component} from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
    render() {
        return (
            <div className="App">
                <GlobalStyle/>
                <Container>
                    <Button danger/>
                    <Button/>
                    <Anchor href={"http://www.google.com"}>Go to google</Anchor>
                </Container>
            </div>
        )
    }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: aliceblue;
`;

const Button = styled.button`
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    font-weight: 600;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:focus {
      outline: none;
    }
    background-color: ${props => props.danger ? "red" : "blue"};
`;

const Anchor = styled(Button)`
  text-decoration: none;
`;


export default App;
