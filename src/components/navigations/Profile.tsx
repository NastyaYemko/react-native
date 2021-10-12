import {Text} from "react-native";
import React from "react";
import Description from "./Profile/Description";
import Photos from "./Profile/Photos";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons} from "@expo/vector-icons";
import AllProfiles from "./Home/AllProfiles";
import Settings from "./Home/Settings";


const Tab = createBottomTabNavigator();

export default function Profile() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Description"
                component={Description}
                options={{
                    tabBarIcon: ({focused}) => <MaterialIcons size={30} name="face" color={ focused ? 'green' : 'black'}
                    />
                }}/>
            <Tab.Screen
                name="Photos" component={Photos}
                options={{
                    tabBarIcon: ({focused}) => <MaterialIcons size={30} name="face" color={ focused ? 'green' : 'black'}
                    />
                }}/>
        </Tab.Navigator>
    );
}

