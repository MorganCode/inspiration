import React from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom";
// Redux
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
// Style
import styled from 'styled-components'
// Components
import NavBar from './nav/components/NavBar'
import Home from './home/Home'
import { Hairstyle, Top, Bottoms, Shoes, Accessory } from './cards/index'


const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

export default function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Container>
          <NavBar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hairstyle">
            <Hairstyle />
          </Route>
          <Route path="/top">
            <Top />
          </Route>
          <Route path="/bottoms">
            <Bottoms />
          </Route>
          <Route path="/shoes">
            <Shoes />
          </Route>
          <Route path="/accessory">
            <Accessory />
          </Route>
        </Container>
      </BrowserRouter>
    </Provider>
  )
}
