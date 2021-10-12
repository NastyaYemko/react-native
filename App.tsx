import React from 'react';
import Home from "./src/components/navigations/Home";
import Profile from "./src/components/navigations/Profile";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import {NavigationContainer} from "@react-navigation/native";

const MainStack = createBottomTabNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
              name="Home"
              component={Home}
              options={{
                  tabBarIcon: ({focused}) => <MaterialIcons size={30} name="home" color={ focused ? 'green' : 'black'}
              />
              }}
          />
          <MainStack.Screen name="Profile" component={Profile} options={{
              tabBarIcon: ({focused}) => <MaterialIcons size={30} name="face" color={ focused ? 'green' : 'black'}
              />
          }}/>
        </MainStack.Navigator>
      </NavigationContainer>
  );
}

