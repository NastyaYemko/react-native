import {Text, TouchableOpacity} from "react-native";
import React from "react";

export default function AllProfiles({ navigation }: any) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text>Go to Settings</Text>
        </TouchableOpacity>
    );
}