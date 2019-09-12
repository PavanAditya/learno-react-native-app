import React from 'react';
import { StyleSheet, Image } from 'react-native';

export class Hero extends React.Component {

    render() {
        return (
            <Image
                    style={styles.logoStyle}
                    source={require('./images/Avengers-EndGame-team.jpg')}
                />
        );
    }
}

const styles = StyleSheet.create({
    logoStyle: {
        flex: 8,
        width: undefined,
        height: undefined
    }
});