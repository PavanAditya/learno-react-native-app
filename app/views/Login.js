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

export class Login extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    cancelLogin = () => {
        Alert.alert('Transformation Cancelled');
        this.props.navigation.navigate('HomeRT');
    };

    loginUser = () => {
        if (!this.state.username) {
            Alert.alert('Please enter a Marvel Name');
        }
        else if (!this.state.password) {
            Alert.alert('Please enter a Codeword');
        }
        else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if (result !== 'none') {
                    Alert.alert(`${result} is already working`);
                    this.props.navigation.navigate('HomeRT');
                }
                else {
                    AsyncStorage.getItem(this.state.username, (err, result) => {
                        if (result !== null) {
                            if (result !== this.state.password) {
                                Alert.alert('Invalid Marvel Name or Codeword');
                            }
                            else {
                                AsyncStorage.setItem('userLoggedIn', this.state.username,
                                    (err, result) => {
                                        Alert.alert(`${this.state.username} Logged in`);
                                        this.props.navigation.navigate('HomeRT');
                                    });
                            }
                        }
                        else {
                            Alert.alert(`${this.state.username} is not a Marvel Hero (Account doesnt exist)`);
                        }
                    });
                }
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>TRANSFORM AS SUPERHERO</Text>
                <Text style={styles.label}>Enter Marvel Name</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.username}
                    placeholder={'Username'}
                />
                <Text style={styles.label}>Enter Codeword</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                    placeholder={'Password'}
                    secureTextEntry={true}
                />
                <TouchableHighlight onPress={this.loginUser} underlayColor='orange'>
                    <Text style={[styles.buttons, styles.submitButton]}>
                        Login
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.cancelLogin} underlayColor='orange'>
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
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    heading: {
        fontSize: 30,
        flex: 2
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