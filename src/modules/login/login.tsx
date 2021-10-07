import {
    Alert,
    Button,
    Image,
    Platform,
    Pressable,
    Text,
    TextInput,
    View
} from "react-native";
import React from "react";
import {styles} from "./styles";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default function Login() {

    const userIcon = require('../../../assets/login/user.png')
    const appleIcon = require('../../../assets/login/apple.png')
    const facebookIcon = require('../../../assets/login/facebook.png')
    const googleIcon = require('../../../assets/login/search.png')
    const gitHubIcon = require('../../../assets/login/github.png')

    return (
        <View style={styles.container}>
            <Text style={styles.logIn}>Log In</Text>
            <KeyboardAwareScrollView>

            <View>
                <TextInput
                    style={styles.textButton}
                    placeholder="email"
                />
                <Image style={styles.iconUser} source={userIcon}/>
            </View>
            <View>
                <TextInput
                    style={styles.textButton}
                    placeholder="password"
                />
                <Image style={styles.iconUser} source={userIcon}/>
            </View>
            <View style={styles.buttonLogIn}>
                <Button
                    title="Log In"
                    onPress={() => Alert.alert('You logged In')}
                />
            </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>
                <View>
                    <Text style={styles.logInWith}>Log In With</Text>
                    <View style={styles.socNets}>
                        <Pressable
                            android_ripple={{
                                color: 'black',
                                borderless: true,
                                radius: 50
                            }}
                            style={({pressed}) => {
                                return [Platform.OS === 'ios' && {
                                    opacity: pressed ? 0.1 : 1
                                }]
                            }}
                        >
                            <Image style={styles.iconSocNets} source={googleIcon}/>
                        </Pressable>
                        <Pressable
                            android_ripple={{
                                color: 'black',
                                borderless: true,
                                radius: 50
                            }}
                            style={({pressed}) => {
                                return [Platform.OS === 'ios' && {
                                    opacity: pressed ? 0.1 : 1
                                }]
                            }}
                        >
                            <Image style={styles.iconSocNets} source={appleIcon}/>
                        </Pressable>
                        <Pressable
                            android_ripple={{
                                color: 'black',
                                borderless: true,
                                radius: 50
                            }}
                            style={({pressed}) => {
                                return [Platform.OS === 'ios' && {
                                    opacity: pressed ? 0.1 : 1
                                }]
                            }}
                        >
                            <Image style={styles.iconSocNets} source={facebookIcon}/>
                        </Pressable>
                        <Pressable
                            android_ripple={{
                                color: 'black',
                                borderless: true,
                                radius: 50
                            }}
                            style={({pressed}) => {
                                return [Platform.OS === 'ios' && {
                                    opacity: pressed ? 0.1 : 1
                                }]
                            }}
                        >
                            <Image style={styles.iconSocNets} source={gitHubIcon}/>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

