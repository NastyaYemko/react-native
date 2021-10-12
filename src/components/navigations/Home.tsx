import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons} from "@expo/vector-icons";
import AllProfiles from "./Home/AllProfiles";
import Settings from "./Home/Settings";
import {Text, TouchableOpacity, View} from "react-native";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function Home({ navigation }: any) {
    return (
            <Tab.Navigator>
                <Tab.Screen
                    name="AllProfiles"
                    component={AllProfiles}
                    options={{
                        tabBarIcon: ({focused}) => <MaterialIcons size={30} name="face" color={ focused ? 'green' : 'black'}
                        />
                    }}/>
                <Tab.Screen
                    name="Settings" component={Settings}
                    options={{
                        tabBarIcon: ({focused}) => <MaterialIcons size={30} name="settings" color={ focused ? 'green' : 'black'}
                        />
                    }}/>
            </Tab.Navigator>
    );
}
