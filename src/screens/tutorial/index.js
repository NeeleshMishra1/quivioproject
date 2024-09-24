import React, { Component } from 'react';
import { View, Image, FlatList, Dimensions, Text } from 'react-native';
import styles from './style';
import { CommonActions } from '@react-navigation/native';


const { width } = Dimensions.get('window');

const slides = [
  {
    key: 'k1',
    title: 'Ecommerce Leader',
    text: 'Best ecommerce in the world',
    image: { uri: 'https://i.imgur.com/jr6pfzM.png' },
    backgroundColor: '#3A98C8',
  },
  {
    key: 'k2',
    title: 'Fast Delivery',
    text: 'Get your order instantly fast',
    image: { uri: 'https://i.imgur.com/au4H7Vt.png' },
    backgroundColor: '#3A98C8',
  },
  {
    key: 'k3',
    title: 'Many Stores',
    text: 'Multiple store locations',
    image: { uri: 'https://i.imgur.com/bXgn893.png' },
    backgroundColor: '#3A98C8',
  },
  {
    key: 'k4',
    title: '24 Hours Support',
    text: 'Get support 24 hours with real human',
    image: { uri: 'https://i.imgur.com/mFKL47j.png' },
    backgroundColor: '#3A98C8',
  }
];

export default class Tutorial extends Component {
  state = {
    currentIndex: 0,
  };

  handleScroll = ({ nativeEvent }) => {
    const contentOffsetX = nativeEvent.contentOffset.x;
    const currentIndex = Math.floor(contentOffsetX / width);
    this.setState({ currentIndex });
    if (currentIndex === slides.length - 1) {
      this.handleHome();
    }
  };

  handleHome = () => {
    const { navigation } = this.props;
    navigation.reset({
      index: 0,
      routes: [{ name: 'signin' }],
    });
  }

  renderItem = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  renderPaginationDots = () => {
    return (
      <View style={styles.paginationDotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { opacity: this.state.currentIndex === index ? 1 : 0.5 }
            ]}
          />
        ))}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ref={(ref) => (this.flatListRef = ref)}
          data={slides}
          renderItem={this.renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.handleScroll}
          keyExtractor={(item) => item.key}
        />
        {this.renderPaginationDots()}
      </View>
    );
  }
}
