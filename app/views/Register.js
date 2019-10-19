import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from 'react-native';

export class Register extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: ''
        }
    };

    cancelRegister = () => {
        Alert.alert('Marvel Enroll Cancelled');
        this.props.navigation.navigate('HomeRT');
    };

    registerAccount = () => {
        if (!this.state.username) {
            Alert.alert('Please enter a Marvel Name (Username)');
        }
        else if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert('Codeword do not match');
        }
        else {
            AsyncStorage.getItem(this.state.username, (err, result) => {
                if (result !== null) {
                    Alert.alert(`${this.state.username} already exists.`);
                }
                else {
                    AsyncStorage.setItem(this.state.username, this.state.password,
                        (err, result) => {
                            Alert.alert(`${this.state.username} is enrolled. You are a Super Hero now.`);
                            this.props.navigation.navigate('HomeRT');
                        });
                }
            });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>MARVEL ENROLL</Text>
                <Text style={styles.label}>Choose a Marvel Name</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.username}
                    placeholder={'Username'}
                />
                <Text style={styles.label}>Marvel Codeword</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                    placeholder={'Password'}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Confirm Codeword</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ passwordConfirm: text })}
                    value={this.state.passwordConfirm}
                    placeholder={'Confirm Password'}
                    secureTextEntry={true}
                />
                <TouchableHighlight onPress={this.registerAccount} underlayColor='orange'>
                    <Text style={[styles.buttons, styles.submitButton]}>
                        Register
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.cancelRegister} underlayColor='orange'>
                    <Text style={[styles.buttons, styles.cancelButton]}>
                        Cancel
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '25%',
        paddingTop: '10%'
    },
    heading: {
        fontSize: 40,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    label: {
        marginTop: 15,
        fontSize: 16
    },
    buttons: {
        fontSize: 20,
        marginTop: 25,
        padding: 10,
        minWidth: '50%'
    },
    submitButton: {
        backgroundColor: '#990000',
        textAlign: 'center'
    },
    cancelButton: {
        backgroundColor: 'grey',
        textAlign: 'center'
    }
});