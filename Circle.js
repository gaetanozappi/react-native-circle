import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Circle extends Component {
  render() {
    const title = this.props.title || 'Title';
    const array = this.props.array || [];
    var tot = array.length,
      h = 360 / 13,
      n = array.length > 12 ? 13 : array.length;
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          {Array(n).fill().map((_, i) => i).map(i => (
            <View
              style={{
                position: 'absolute',
                transform: [
                  { rotate: i * h + 90 + 'deg' },
                  { translateX: -70 },
                ],
              }}>
              <Image
                source={{
                  uri: array[i],
                }}
                style={{
                  height: 32,
                  width: 32,
                  borderRadius: 100,
                  transform: [{ rotate: -(i * h + 90) + 'deg' }],
                }}
              />
            </View>
          ))}
          <View style={styles.circle2}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            <Text style={styles.total}>
              {tot}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  circle: {
    marginTop: 100,
    marginLeft: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#4998ed',
  },
  circle2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4696d4',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#4998ed',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    paddingLeft: 5,
    paddingRight: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(52, 52, 52, 0.8)',
    paddingLeft: 5,
    paddingRight: 5,
  },
});
