



import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, Text } from 'react-native';
import Images from '../assets/image';

export default class TextinputEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isValidEmail: true,
      showPlaceholderAbove: false,
    };
  }

  validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  handleEmailChange = (email) => {
    this.setState({ 
      email, 
      showPlaceholderAbove: email.length > 0 
    });
    this.props.onEmailChange(email);
  };

  handleEmailBlur = () => {
    const { email } = this.state;
    const isValid = this.validateEmail(email);
    this.setState({ isValidEmail: isValid });
  };

  render() {
    const { email, isValidEmail, showPlaceholderAbove } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={[
          styles.container, 
          !isValidEmail && styles.invalidInput 
        ]}>
          <Image
            source={Images.Emailimage}
            style={styles.image}
          />
          <View style={styles.inputWrapper}>
            {showPlaceholderAbove && (
              <Text 
                style={[
                  styles.floatingLabel, 
                  !isValidEmail ? styles.floatingLabelError : styles.floatingLabelNormal
                ]}
              >
                Email Address
              </Text>
            )}
            <TextInput
              style={styles.input}
              placeholder={!showPlaceholderAbove ? "Email Address" : ''}
              placeholderTextColor={!isValidEmail ? "red" : "#9da0a1"}
              value={email}
              onChangeText={this.handleEmailChange}
              onBlur={this.handleEmailBlur} 
              keyboardType="email-address"
            />
          </View>
        </View>
        {!isValidEmail && <Text style={styles.errorText}>❗️Invalid email address entered</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
  },
  container: {
    height: 60,
    borderRadius: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    alignItems: 'center',
  },
  invalidInput: {
    borderColor: "red", 
  },
  image: {
    width: 30,
    height: 30,
    margin: 13,
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    marginLeft: 5,
  },
  floatingLabel: {
    position: 'absolute',
    left: 5,
    top: -5,
    fontSize: 12,
  },
  floatingLabelNormal: {
    color: 'grey',  
  },
  floatingLabelError: {
    color: 'red',  
  },
  errorText: {
    color: 'red',
    marginTop: 6,
    marginLeft: 30,
    fontSize: 14,
  },
});


