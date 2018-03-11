import React from 'react'
import { View, StatusBar } from 'react-native'

import { Container } from '../components/Container'

const Home = () => (
  <Container>
    <StatusBar translucent={false} barStyle='light-content' />
    <View />
  </Container>
);

export default Home;
