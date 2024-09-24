
import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

export default class Passwordinput extends Component {
  state = {
    showPassword: false,
    password: '',
    isValidPassword: true,
    showPlaceholderAbove: false,
  };

  togglePasswordVisibility = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  validatePassword = (password) => {
    return password.length >= 6;
  };

  handlePasswordChange = (password) => {
    this.setState({ 
      password, 
      showPlaceholderAbove: password.length > 0 
    });
    this.props.onPassword(password)
  };

  handlePasswordBlur = () => {
    const { password } = this.state;
    const isValid = this.validatePassword(password);
    this.setState({ isValidPassword: isValid });
  };

  render() {
    const { showPassword, password, isValidPassword, showPlaceholderAbove } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={[
          styles.Container, 
          !isValidPassword && styles.invalidInput 
        ]}>
          <Image
            source={require('/Users/user/quivio/src/assets/image/lock.png')}
            style={styles.image}
          />
          <View style={styles.inputWrapper}>
            {showPlaceholderAbove && (
              <Text style={[
                styles.floatingLabel, 
                !isValidPassword ? styles.floatingLabelError : styles.floatingLabelNormal // Red when invalid
              ]}>
                Password
              </Text>
            )}
            <TextInput
              style={styles.input}
              placeholder={!showPlaceholderAbove ? "Password" : ''}
              placeholderTextColor={!isValidPassword ? "red" : "#9da0a1"}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={this.handlePasswordChange}
              onBlur={this.handlePasswordBlur} 
            />
          </View>
          <TouchableOpacity onPress={this.togglePasswordVisibility} style={styles.eyeIconContainer}>
            <Image
              source={showPassword 
                ? require('/Users/user/quivio/src/assets/image/eye-off.png') 
                : require('/Users/user/quivio/src/assets/image/eye.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        {!isValidPassword && <Text style={styles.errorText}> ❗️Password must be at least 6 characters long</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
  },
  Container: {
    height: 60,
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  invalidInput: {
    borderColor: "red", 
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    marginLeft: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
  floatingLabel: {
    position: 'absolute',
    left: 5,
    top: -15,
    fontSize: 12,
  },
  floatingLabelError: {
    color: 'red',
  },
  floatingLabelNormal: {
    color: 'grey',
  },
  eyeIconContainer: {
    justifyContent: 'center',
    paddingRight: 10,
  },
  eyeIcon: {
    width: 25,
    height: 25,
  },
  errorText: {
    color: 'red',
    marginTop: 6,
    marginLeft: 10,
    fontSize: 14,
  },
});

