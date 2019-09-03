import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    toggleUser = () => {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn };
        });
    }

    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={require('./images/full-learn.png')}
                />
                <Image
                    style={styles.logoStyle && styles.logoBrain}
                    source={require('./images/brain-bulb.png')}
                />
                <Text
                    style={styles.headText}
                    onPress={this.toggleUser}>{display}
                </Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    headText: {
        paddingTop: 20,
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20
    },
    headStyle: {
        paddingTop: 20,
        paddingRight: 10,
        backgroundColor: '#35605a',
        flex: 1,
        flexDirection: 'row'
    },
    logoStyle: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    logoBrain: {
        width: 80,
        height: 67
    }
});