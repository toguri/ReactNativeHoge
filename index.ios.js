/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var ReactNativeHoge = React.createClass({
  render: function() {
  var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Text sytle={styles.instructions}>{movie.title}</Text>
        <Text sytle={styles.welcome}>{movie.year}</Text>
        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
      </View>
    );
  }
});

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
  thumbnail: {
    width: 106,
    height: 162,
  },
});

AppRegistry.registerComponent('ReactNativeHoge', () => ReactNativeHoge);
