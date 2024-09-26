import React, { Component } from 'react';
import { View, TextInput, SafeAreaView ,Text} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import styles from './style';

export default class PhoneNumber extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
       phoneNumber: '+1',   
        countryCode: 'US',
      showPlaceholderAbove: false,
    };
  }
  onSelectCountry = (country) => {
    const callingCode = country.callingCode[0];
    this.setState({
      countryCode: country.cca2,
      phoneNumber: `+${callingCode}`,  
    });
  };
  render() {
    const { phoneNumber, countryCode } = this.state;
    return (
      <SafeAreaView style={styles.safearea}>
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
          {this.state.showPlaceholderAbove && <Text style={styles.placeholder}>{this.props.placeholder}</Text>}
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone number"
              placeholderTextColor="grey"
              keyboardType="phone-pad"
              onChangeText={(text) => this.setState({ phoneNumber: text })}
            />
            {this.props.text?<Text style={styles.text1 }>{this.props.text}</Text>:null}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
