
import React, { Component } from 'react';
import { View, Image, SafeAreaView, Text, TouchableOpacity, Modal, Button } from 'react-native';
import strings from '../../utils/string';
import styles from './styles';
import TextinputEmail from '../../components/Emailnput';
import PrimaryButton from '../../components/primarybutton';

export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errorMessage: '',
      isEmailValid: true,
      showModal: false,
    };
  }

  handleEmailChange = (email) => {
    this.setState({ email, isEmailValid: true, errorMessage: '' });
  };

  handleHome = () => {
    const { navigation } = this.props;
    navigation.navigate('signin');
  };

  handleReset = () => {
    const {navigation} = this.props;
    const { email } = this.state;

    console.log(email);
    if (email === 'A@gmail.com') {
      this.setState({ showModal: true });
    } else {
      this.setState({
        isEmailValid: false,
        errorMessage: 'Email not found. Contact admin',
      });
    }
  };

  handleCloseModal = () => {
    const { navigation } = this.props;
    this.setState({ showModal: false }, () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Resetpassword' }],
      });
    });
  };


  render() {
    const { errorMessage, isEmailValid, showModal } = this.state;

    return (
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          {errorMessage ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{errorMessage}</Text>
            </View>
          ) : null}

          <View style={styles.container1}>
            <TouchableOpacity onPress={this.handleHome}>
              <View style={styles.arrowcontainer}>
                <Image
                  source={require('/Users/user/quivio/src/assets/image/arrow-left.png')}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.forget}>{strings.Forget}</Text>
            <Text style={styles.reset}>{strings.Reset}</Text>

            <TextinputEmail
              onEmailChange={this.handleEmailChange}
              background={'white'}
              isValid={isEmailValid}
            />
            <View style={styles.button}>
              <TouchableOpacity onPress={this.handleReset}>
                <PrimaryButton title={strings.send_link} />
              </TouchableOpacity>
            </View>

            <Modal
              visible={showModal}
              transparent={true}
              animationType="slide"
              onRequestClose={() => this.setState({ showModal: false })}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                <View style={styles.modalimage}>
                                <Image
                                    source={require('/Users/user/quivio/src/assets/image/linksend.png')}
                                    style={styles.image1}
                                />
                            </View>
                  <Text style={styles.modalText}>{strings.link_sent}</Text>
                  <Text style={styles.modalText1}>{strings.The_link}</Text>
                  <Text style={styles.modalText1}>{strings.been_sent}</Text>
                  <TouchableOpacity onPress={this.handleCloseModal}>
                    <View style={styles.modalButton}>
                      <Text style={styles.modalButtonText}>Back to Login</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}



