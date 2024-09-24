
import React, { Component } from 'react';
import { View, Image, SafeAreaView, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import strings from '../../../utils/string';
import styles from './styles';
import PrimaryButton from '../../../components/primarybutton';
import CountryPicker from 'react-native-country-picker-modal';

export default class Addphone extends Component {
  state = {
    phoneNumber: '+1',
    countryCode: 'US',
    errorMessage: '',
  };

  onSelectCountry = (country) => {
    this.setState({ countryCode: country.cca2 });
  };

  handleHome = () => {
    const { phoneNumber } = this.state;


    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phoneNumber.replace(/\D/g, ''))) {
      this.setState({ errorMessage: 'User exists.Try a diffferent number' });
    } else {
      this.setState({ errorMessage: '' });
      const { navigation } = this.props;
      navigation.reset({
        index: 0,
        routes: [{ name: 'otp' }],
      });
    }
  };

  handleHphone = () => {
    const { navigation } = this.props;
    navigation.navigate('bottom');
  };

  render() {
    const { phoneNumber, countryCode, errorMessage } = this.state;

    return (
      <SafeAreaView style={styles.safearea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container1}>


              {errorMessage ? (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorMessage}>{errorMessage}</Text>
                </View>
              ) : null}

              <TouchableOpacity onPress={this.handleHphone}>
                <View style={styles.arrowcontainer}>
                  <Image source={require('/Users/user/quivio/src/assets/image/arrow-left.png')} style={styles.image} />
                </View>
              </TouchableOpacity>

              <Text style={styles.forget}>{strings.add_phone}</Text>
              <Text style={styles.reset}>{strings.To_initiate}</Text>
              <Text style={styles.reset}>{strings.To_initiate1}</Text>

              <View style={styles.textinputContainer}>
                <View style={styles.countryPickerContainer}>
                  <CountryPicker
                    countryCode={countryCode}
                    withFlag={true}
                    withCallingCode={true}
                    withFilter={true}
                    onSelect={this.onSelectCountry}
                    containerButtonStyle={styles.countryPicker}
                  />
                </View>
                <View style={styles.phoneInputContainer}>
                  <TextInput
                    style={styles.phoneInput}
                    placeholder=" Phone number"
                    placeholderTextColor="grey"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={(text) => this.setState({ phoneNumber: text })}
                  />
                </View>
              </View>
            </View>
          </ScrollView>

          <View style={styles.button}>
            <TouchableOpacity onPress={this.handleHome}>
              <PrimaryButton title={strings.send_code} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}


