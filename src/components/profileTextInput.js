
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default class ProfileTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.value || '', 
      showPlaceholderAbove: false,
    };
    this.handlecalender = this.handlecalender.bind(this);
  }
  
  handlecalender() {
    if (this.props.onclick) { 
      this.props.onclick(); 
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ name: this.props.value || '' }); 
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.showPlaceholderAbove && <Text style={styles.placeholder}>{this.props.placeholder}</Text>}
        <TextInput
          style={styles.textInput}
          placeholder={this.props.placeholder}
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
          onFocus={() => this.setState({ showPlaceholderAbove: true })}
          onBlur={() => this.setState({ showPlaceholderAbove: this.state.name !== '' })}
        />
        <TouchableOpacity style={styles.image} onPress={this.handlecalender}>
          {this.props.icon ? <Image style={styles.image} source={this.props.icon} /> : null}
        </TouchableOpacity>
          {this.props.text ? <Text style={styles.text1}>{this.props.text}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 7,
    paddingLeft:13,
    height: 60,
    justifyContent: "center",
    position: "relative",
  },
  textInput: {
    fontSize: 18,
    color: '#333',
  },
  placeholder: {
    position: 'absolute',
    top: -12,
    left: 10,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#666',
  },
  image: {
    position: "absolute",
    right: 20,
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
  text1: {
    position: "absolute",
    right: 20,
    fontSize: 17,
    fontWeight: "600",
    color: "#EE27A9",
  }, 
});
