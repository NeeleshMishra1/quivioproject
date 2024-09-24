
import React, { Component } from 'react';
import { View, Image, SafeAreaView, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Modal } from 'react-native';
import strings from '../../../utils/string';
import styles from './style';
import PrimaryButton from '../../../components/primarybutton';

export default class Otppage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: Array(6).fill(''), 
      errorMessage: '',
      attemptsRemaining: 2, 
      otpInvalid: false, 
      showModal: false,  
      showSuccessModal: false,  
    };
    this.inputs = Array(6).fill(null);
  }

  focusNextInput = (index) => {
    if (index < this.inputs.length - 1) {
      this.inputs[index + 1].focus();
    }
  };

  handleTextChange = (text, index) => {
    const newOtp = [...this.state.otp];
    newOtp[index] = text;
    this.setState({ otp: newOtp });

    if (text.length === 1) {
      this.focusNextInput(index);
    }
  };

  validateOtp = () => {
    const enteredOtp = this.state.otp.join('');
    const fixedOtp = '123456';

    if (enteredOtp === fixedOtp) {
      this.setState({ errorMessage: '', otpInvalid: false, showSuccessModal: true });
    } else {
      this.setState((prevState) => {
        const newAttemptsRemaining = prevState.attemptsRemaining - 1;

        if (newAttemptsRemaining <= 0) {
          return {
            attemptsRemaining: newAttemptsRemaining,
            showModal: true,
            otpInvalid: true,
          };
        } else {
          return {
            errorMessage: `The code you entered is incorrect,you have${newAttemptsRemaining} attempts remaining.`,
            otpInvalid: true,
            attemptsRemaining: newAttemptsRemaining,
          };
        }
      });
    }
  };

  handleHphone = () => {
    const { navigation } = this.props;
    navigation.navigate('addphone');
  };

  handleBackToLogin = () => {
    const { navigation } = this.props;
    this.setState({ showModal: false });
    navigation.navigate('signin');
  };

  handleSuccessModalClose = () => {
    this.setState({ showSuccessModal: false });
    const { navigation } = this.props;
    navigation.navigate('bottom');
  };

  render() {
    const { otpInvalid, errorMessage, showModal, attemptsRemaining, showSuccessModal } = this.state;

    return (
      <SafeAreaView style={styles.safearea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container1}>
              <TouchableOpacity onPress={this.handleHphone}>
                <View style={styles.arrowcontainer}>
                  <Image source={require('/Users/user/quivio/src/assets/image/arrow-left.png')} style={styles.image} />
                </View>
              </TouchableOpacity>
              <Text style={styles.forget}>{strings.verify}</Text>
              <Text style={styles.reset}>{strings.Enter_the}</Text>
              <Text style={styles.reset1}>{strings.Phone_number}</Text>

              <View style={[styles.otpContainer, otpInvalid && styles.otpContainerInvalid]}>
                {Array.from({ length: 6 }, (_, index) => (
                  <TextInput
                    key={index}
                    style={styles.otpInput}
                    placeholder=""
                    placeholderTextColor="grey"
                    keyboardType="numeric"
                    maxLength={1}
                    ref={(input) => (this.inputs[index] = input)}
                    onChangeText={(text) => this.handleTextChange(text, index)}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === 'Backspace' && index > 0) {
                        this.inputs[index - 1].focus();
                      }
                    }}
                  />
                ))}
              </View>

              {attemptsRemaining > 0 && (
                <Text style={styles.attemptMessage}>{errorMessage}</Text>
              )}

              <View style={styles.resend}>
                <TouchableOpacity>
                  <Text style={styles.reset1}>{strings.resend}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.validateOtp}>
              <PrimaryButton title={strings.Confirm_code} />
            </TouchableOpacity>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              this.setState({ showModal: false });
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
              <View style={styles.modalimage}>
                                <Image
                                    source={require('/Users/user/quivio/src/assets/image/failed.png')}
                                    style={styles.image1}
                                />
                            </View>
                <Text style={styles.modalTitle}>Too Many Failed Attempts</Text>
                <Text style={styles.modalTitle1}> Attempts</Text>
                <Text style={styles.modalMessage}>Your account has been locked. Please try again later in one hour.</Text>

                <TouchableOpacity style={styles.backToLoginButton} onPress={this.handleBackToLogin}>
                  <Text style={styles.backToLoginButtonText}>Back to Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={showSuccessModal}
            onRequestClose={() => {
              this.setState({ showSuccessModal: false });
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
              <View style={styles.modalimage}>
                                <Image
                                    source={require('/Users/user/quivio/src/assets/image/verify.png')}
                                    style={styles.image1}
                                />
                            </View>
                <Text style={styles.modalTitle}>Account Verified!</Text>
                <Text style={styles.modalMessage}>Your account has been verified successfully.</Text>

                <TouchableOpacity style={styles.backToLoginButton} onPress={this.handleSuccessModalClose}>
                  <Text style={styles.backToLoginButtonText}>Back to Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}



