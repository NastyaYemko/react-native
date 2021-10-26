import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache, gql} from "@apollo/client";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import NavigationUser from "./src/components/users/navigation/NavigationUser";
import NavigationItem from "./src/components/items/navigation/NavigationItem";

export default function App() {
  const typeDefs = gql`
        scalar Upload

        type CreateItemInput {
            title: String!
            description: String!
        }
    `
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
    typeDefs,
  })
  const MainStack = createBottomTabNavigator()
  return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MainStack.Navigator>
            <MainStack.Screen name="Items" component={NavigationItem} options={{
              tabBarIcon: ({focused}) => <MaterialIcons size={30} name="face" color={ focused ? 'green' : 'black'}
              />
            }}/>
              <MainStack.Screen
                  name="Users"
                  component={NavigationUser}
                  options={{
                      tabBarIcon: ({focused}) => <MaterialIcons size={30} name="person" color={ focused ? 'green' : 'black'}
                      />
                  }}
              />
          </MainStack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
  );
}
