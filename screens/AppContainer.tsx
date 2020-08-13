import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './Main/Profile';
import Search from './Main/Search';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
