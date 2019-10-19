import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import HTML from 'react-native-render-html';

export class Blog extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { blogLoaded: false };
    }

    componentDidMount() {
        return fetch('https://public-api.wordpress.com/rest/v1.1/sites/rnativetest.wordpress.com/posts')
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    blogLoaded: true,
                    blogList: Array.from(responseJson.posts)
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    chooseBlog = (blogID) => {
        this.props.navigation.navigate('BlogDetailRT', { blogId: blogID });
    }

    render() {
        return (
            <View>
                {this.state.blogLoaded && (
                    <View style={styles.blog}>
                        <FlatList
                            data={this.state.blogList}
                            keyExtractor={(item, index) => item.ID.toString()}
                            renderItem={({ item }) =>
                                <BlogItem
                                    id={item.ID}
                                    title={item.title}
                                    imageSrc={item.featured_image}
                                    excerpt={item.excerpt}
                                    choosePost={this.chooseBlog}
                                />
                            }
                        />
                    </View>
                )}
                {!this.state.blogLoaded && (
                    <View style={styles.load}>
                        <Text style={styles.loadingScreen}>LOADING....,</Text>
                    </View>
                )}
            </View>
        );
    }
}

export class BlogItem extends React.Component {
    blogChoice = () => {
        this.props.choosePost(this.props.id)
    }

    render() {
        let blogItems = `
        <a href=${this.props.id} style="textDecorationLine: none; color: #000000; textAlign: center">
        <img src=${this.props.imageSrc}>
        <h1>${this.props.title}</h1>
        ${this.props.excerpt}
        </a>
        `;

        return (
            <View style={styles.htmlView}>
                <HTML html={blogItems} onLinkPress={() => this.blogChoice()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    blog: {
        paddingTop: 40
    },
    load: {
        paddingTop: 30
    },
    loadingScreen: {
        fontSize: 50,
        paddingTop: '75%',
        paddingLeft: '20%'
    },
    htmlView: {
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        borderStyle: 'solid'
    }
});