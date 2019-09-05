import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from '../sections/Header';
import { StackNavigator } from 'react-navigation';

export class Contact extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            msg: '',
            email: ''
        }
    }

    clearFiels = () => this.setState({ name: '', msg: '', email: '' });

    sendMessage = () => {
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header navigate={navigate} message='Press to Login' />
                <Text style={styles.heading}>Contact Us</Text>

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                    placeholder={"who's saying it....,"}
                />

                <TextInput
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({ msg: text })}
                    value={this.state.msg}
                    multiline={true}
                    numberOfLines={4}
                    placeholder={"wanna say something....,"}
                />

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                    placeholder={"how to contact you online....,"}
                />

                <TouchableHighlight onPress={this.sendMessage} underlayColor="#31e981">
                    <Text style={[styles.buttons, styles.sendButton]}>
                        Send Message
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.clearFiels} underlayColor="#31e981">
                    <Text style={[styles.buttons, styles.clearButton]}>
                        Reset Form
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        paddingBottom: '45%'
    },
    heading: {
        fontSize: 40,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        paddingTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        backgroundColor: '#f5f5f5'
    },
    multiInput: {
        flex: 2,
        width: '80%',
        paddingTop: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        backgroundColor: '#f5f5f5'
    },
    buttons: {
        marginTop: 15,
        fontSize: 16,
        padding: 10,
        minWidth: '50%'
    },
    sendButton: {
        backgroundColor: '#35605a',
        textAlign: 'center'
    },
    clearButton: {
        backgroundColor: 'grey',
        textAlign: 'center'
    }
});