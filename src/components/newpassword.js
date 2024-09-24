
import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Newpassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validations, setValidations] = useState({
    length: false,
    specialChar: false,
    number: false,
    upperLowerCase: false,
  });
  const [passwordMismatchMessage, setPasswordMismatchMessage] = useState('');

  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const validations = {
      length: password.length >= 8,
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      number: /\d/.test(password),
      upperLowerCase: /[a-z]/.test(password) && /[A-Z]/.test(password),
    };
    setPassword(password);
    setValidations(validations);
  };

  const handleSubmit = () => {
    if (password === confirmPassword) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'signin' }],
      });
      setPassword('');
      setConfirmPassword('');
      setPasswordMismatchMessage('');
    } else {
      setPasswordMismatchMessage("Your password doesn't match");
    }
  };

  const renderValidation = (isValid, text) => (
    <View style={styles.validationItem}>
      <Image
        source={isValid ? require('/Users/user/quivio/src/assets/check.png') : require('/Users/user/quivio/src/assets/image/close.png')}
        style={styles.validationIcon}
      />
      <Text style={[styles.validationText, isValid && styles.validationTextValid]}>{text}</Text>
    </View>
  );

  const isPasswordMismatch = password && confirmPassword && password !== confirmPassword;

  return (
    <View>
      {passwordMismatchMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{passwordMismatchMessage}</Text>
        </View>
      )}

      <View style={[styles.Container, isPasswordMismatch && styles.containerError]}>
        <Image
          source={require('/Users/user/quivio/src/assets/image/lock.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry={!showPassword}
          onChangeText={validatePassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
          <Image
            source={showPassword ? require('/Users/user/quivio/src/assets/image/eye.png') : require('/Users/user/quivio/src/assets/image/eye-off.png')}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.validationContainer}>
        {renderValidation(validations.length, '8 characters or more')}
        {renderValidation(validations.specialChar, '1 or more special characters')}
        {renderValidation(validations.number, '1 or more numbers')}
        {renderValidation(validations.upperLowerCase, 'Upper and lowercase')}
      </View>

      <View style={[styles.Container, isPasswordMismatch && styles.containerError]}>
        <Image
          source={require('/Users/user/quivio/src/assets/image/lock.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
          <Image
            source={showPassword ? require('/Users/user/quivio/src/assets/image/eye.png') : require('/Users/user/quivio/src/assets/image/eye-off.png')}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.submitButtonContainer}>
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 60,
    borderRadius: 8,
    marginTop: 30,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  containerError: {
    borderColor: 'red',
  },
  input: {
    fontSize: 18,
    flex: 1,
    marginLeft: 15,
  },
  image: {
    width: 30,
    height: 30,
  },
  eyeIconContainer: {
    justifyContent: 'center',
    paddingRight: 10,
  },
  eyeIcon: {
    width: 25,
    height: 25,
  },
  validationContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  validationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  validationIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  validationText: {
    fontSize: 16,
    color: 'gray',
  },
  validationTextValid: {
    color: 'green',
  },
  errorContainer: {
    marginHorizontal: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  errorMessage: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  submitButtonContainer: {
    marginTop: 120,
  },
  submitButton: {
    backgroundColor: '#3289C2',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Newpassword;

