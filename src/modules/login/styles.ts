import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 0.15,
        backgroundColor: '#e6e6fa',
        shadowColor: "#000080",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.6,
        shadowRadius: 16.00,
        elevation: 24,
        padding: 20
    },
    logIn: {
        textAlign: "center",
        margin: 10,
        fontSize: 30,
        color: "#000080"
    },
    buttonLogIn: {
        borderStyle: "dashed",
        borderColor: "blue",
        borderWidth: 2,
        margin: 15
    },
    text: {
        justifyContent: 'center',
        minHeight: 60,
        fontSize: 20,
        backgroundColor: 'green'
    },
    logInWith: {
        fontSize: 20,
        textAlign: "center",
        margin: 20
    },
    textButton: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 35,
        borderRadius: 10,

    },
    iconUser: {
        width: 20,
        height:20,
        position: "absolute",
        margin: 22
    },
    iconSocNets: {
        width: 30,
        height:30,
        margin: 10
    },
    socNets: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
});