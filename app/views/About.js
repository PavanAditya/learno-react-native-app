import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

const aboutMarvelHero = `Marvel Hero is an app made for knowing and finding about the 
various Marvel Characters and their super powers.`;

const whatMarvelHero = `It has a login/Register feature for basic authentication. 
It has videos as teachings, and Quiz for getting your score about various marvel instincts.
Contact Page is for contacting our team and for providing your feedbacks on the app.`;

const madeMarvelHero = `Pavan Aditya M S`;

export class About extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.pics} source={require('../sections/images/Avengers-EndGame-team.jpg')} />
                <Text style={styles.aboutTitle}>WHO ARE WE</Text>
                <Text style={styles.aboutText}>{aboutMarvelHero}</Text>
                <Text style={styles.aboutText}>{whatMarvelHero}</Text>

                <Text style={styles.aboutTitle}>WHO MADE IT</Text>
                <Image style={styles.myPic} source={require('../sections/images/me.jpg')} />
                <Text style={styles.name}>{madeMarvelHero}</Text>
                <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>Go Back</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        width: '100%',
        height: '35%'
    },
    aboutText: {
        paddingTop: 10,
        textAlign: 'center'
    },
    aboutTitle: {
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    name: {
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 30
    },
    myPic: {
        width: '100%',
        height: 200
    },
    backButton: {
        paddingTop: 20,
        paddingBottom: 25,
        fontSize: 20,
        textAlign: 'center'
    }
});