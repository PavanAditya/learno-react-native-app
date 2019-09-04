import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Home } from './app/views/Home';
import { Contact } from './app/views/Contact';
import { Video } from './app/views/Video'

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  }
},
  {
    initialRouteName: 'HomeRT'
  });

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}
