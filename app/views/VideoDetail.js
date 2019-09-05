import React from 'react';
import { Text, View, StyleSheet, WebView } from 'react-native';

export class VideoDetail extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let tubeId = this.props.navigation.getParam('youtubeId', 'NO VIDEO');
        let tubeUrl = `https://www.youtube.com/embed/${tubeId}`;
        return (
            <WebView
                style={styles.videoContainer}
                javaScriptEnabled={true}
                source={{ uri: tubeUrl }}
            />
        );
    }
}

const styles = StyleSheet.create({
    videoContainer: {
        marginTop: 20
    }
});