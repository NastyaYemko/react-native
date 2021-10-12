import {Text, TouchableOpacity} from "react-native";
import React from "react";

export default function Photos({ navigation }: any) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Description')}>
            <Text>Go to Description</Text>
        </TouchableOpacity>
    );
}