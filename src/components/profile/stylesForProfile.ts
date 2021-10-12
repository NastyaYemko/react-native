import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    sizeForImage: {
        height: 300,
    },
    image: {
        height: 300,
        resizeMode: "cover",
        zIndex: 0,
    },
    alpha: {
        zIndex: 1,
        height: 300,
        top: -300,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    profilePhoto: {
        width: 200,
        height: 200,
        borderRadius: 200,
        borderWidth: 4,
        borderStyle: "solid",
        borderColor: "coral",
        top: -100
    },
    locationPhoto: {
        height: 100,
        alignItems: "center"
    },
    nameAndJob: {
        alignItems: "center",
        padding: 10
    },
    name: {
        fontSize: 25,
        fontWeight: "bold"
    },
    job: {
        fontSize: 20
    },
    followers: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        padding: 10
    },
    numOfFollowers: {
        width: 100,
        height: 70,
        backgroundColor: "gainsboro",
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    nameForBox: {
        fontSize: 17
    },
    numForBox: {
        fontSize: 15
    },
    lists: {
        justifyContent: "center",
        alignItems: "center",
    },
    list: {
        width: 375,
        height: 50,
        borderWidth: 2,
        margin: 15,
        borderStyle: "solid",
        borderColor: "gray",
        borderRadius: 10,
        padding: 10,
        flexDirection: "row"
    },
    icon: {
        width: 30,
        height: 30
    },
    description: {
        fontSize: 20,
        justifyContent: "center",
        marginLeft: 10
    }
})

export default styles;