

import React, { Component } from 'react';
import { View, Image, SafeAreaView, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import strings from '../../utils/string';
import styles from './style';
import TextinputEmail from '../../components/Emailnput';
import PrimaryButton from '../../components/primarybutton';
import Newpassword from '../../components/newpassword';

export default class ResetPassword extends Component {
  handleHome = () => {
    const { navigation } = this.props;
    navigation.reset({
      index: 0,
      routes: [{ name: 'signin' }],
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.safearea}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
              <View style={styles.container1}>
                <TouchableOpacity>
                  <View style={styles.arrowcontainer}>
                    <Image source={require('/Users/user/quivio/src/assets/image/logo.png')} style={styles.image} />
                  </View>
                </TouchableOpacity>
                <Text style={styles.forget}>{strings.Reset_password}</Text>
                <Text style={styles.reset}>{strings.Enter}</Text>
                <Newpassword background={'white'} />
              </View>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}




