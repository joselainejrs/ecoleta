import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Create from './pages/Create';
import Search from './pages/Search';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Create" component={Create} />
        <AppStack.Screen name="Search" component={Search} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}
