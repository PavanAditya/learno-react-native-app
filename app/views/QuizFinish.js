import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export class Finish extends React.Component {
    static navigationOptions = {
        header: null
    };

    exitQuiz = () => {
        this.props.navigatio.navigate('HomeRT');
    }

    render() {
        let userScore = this.props.navigation.getParam('score', 'Error - No score returned');
        let questionsMissed = this.props.navigation.getParam('missed', 'Error - No missed questions returned');
        let totalQuestions = this.props.navigation.getParam('questions', 'Error - No total questions returned');
        return (
            <View style={Stylesheet.container}>
                <Text>Your Marvel Score was {userScore}</Text>
                <Text>You missed on {questionsMissed} questions out of {totalQuestions} questions</Text>

                <TouchableHighlight onPress={this.exitQuiz} style={styles.button}>
                    <Text>Finish</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    }
});