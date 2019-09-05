import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';

export class Video extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { listLoaded: false };
    }

    componentDidMount() {
        return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=Marvel%20Entertainment&type=video&key=AIzaSyC3PT_WKdlngPACw49H4rPWJgHChAMExU4')
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    listLoaded: true,
                    videoList: Array.from(responseJson.items)
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                {this.state.listLoaded && (
                    <View style={styles.container}>
                        <FlatList
                            data={this.state.videoList}
                            renderItem={({ item }) =>
                                <TubeItem
                                    navigate={navigate}
                                    id={item.id.videoId}
                                    title={item.snippet.title}
                                    imageSrc={item.snippet.thumbnails.high.url}
                                />
                            }
                        />
                    </View>
                )}
                {!this.state.listLoaded && (
                    <View style={styles.container}>
                        <Text> LOADING..., </Text>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    },
    video: {
        paddingTop: 20,
        alignItems: 'center'
    },
    thumbnail: {
        width: '100%',
        height: 200
    }
});

export class TubeItem extends React.Component {
    onPress = () => {
        this.props.navigate('VideoDetailRT', {youtubeId: this.props.id});
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={styles.video}>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: this.props.imageSrc }}
                    />
                    <Text>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}