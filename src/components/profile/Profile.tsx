import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import styles from "./stylesForProfile";

const item = {
    Patrik: {
        photo: require('../../../assets/profile/maxresdefault.jpeg'),
        post: 'React Native developer',
        following: 3764,
        followers: 7475,
        likes: 9575,
        location: '21, London, Great Britain',
        phone: '564-747-94',
        gmail: 'the.best.cat@gmail.com'
    }
}


export default function Profile() {
    const bgPhoto = require('../../../assets/profile/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg')
    const locationIcon = require('../../../assets/profile/location.png')
    const phoneIcon = require('../../../assets/profile/phone-call.png')
    const gmailIcon = require('../../../assets/profile/gmail.png')
    return (
        <View>
            <View style={styles.sizeForImage}>
                <Image source={bgPhoto} style={styles.image} />
                <View style={styles.alpha}></View>

            </View>
            <View style={styles.locationPhoto}>
                <Image source={item.Patrik.photo} style={styles.profilePhoto}/>
            </View>
            <View style={styles.nameAndJob}>
                <Text style={styles.name}>Cat named Patrik</Text>
                <Text style={styles.job}>{item.Patrik.post}</Text>
            </View>
            <View style={styles.followers}>
                <View style={styles.numOfFollowers}>
                    <Text style={styles.nameForBox}>Following:</Text>
                    <Text style={styles.numForBox}>{item.Patrik.following}</Text>
                </View>
                <View style={styles.numOfFollowers}>
                    <Text style={styles.nameForBox}>Followers:</Text>
                    <Text style={styles.numForBox}>{item.Patrik.followers}</Text>
                </View>
                <View style={styles.numOfFollowers}>
                    <Text style={styles.nameForBox}>Likes:</Text>
                    <Text style={styles.numForBox}>{item.Patrik.likes}</Text>
                </View>
            </View>
            <View style={styles.lists}>
                <View style={styles.list}>
                    <Image source={locationIcon} style={styles.icon}/>
                    <Text style={styles.description}>{item.Patrik.location}</Text>
                </View>
                <View style={styles.list}>
                    <Image source={phoneIcon} style={styles.icon}/>
                    <Text style={styles.description}>{item.Patrik.phone}</Text>
                </View>
                <View style={styles.list}>
                    <Image source={gmailIcon} style={styles.icon}/>
                    <Text style={styles.description}>{item.Patrik.gmail}</Text>
                </View>
            </View>
        </View>
    );
}

