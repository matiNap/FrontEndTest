import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import User from './User';
import Gallery from './Gallery';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Gallery" component={Gallery} />
    </Stack.Navigator>
  );
};
