import {Text, TouchableOpacity, View} from "react-native";
import React from "react";

export default function Description({ navigation }: any) {
    return (
        <View>
        <Text>Hi Description</Text>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go to back</Text>
    </TouchableOpacity>
        </View>
    );
}