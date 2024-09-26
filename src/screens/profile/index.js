
import React, { Component } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import ProfileTextInput from '../../components/profileTextInput';
import styles from './style';
import Images from '../../assets/image';
import PhoneNumber from '../../components/countrypicker';
import DateTimePicker from 'react-native-calendars-picker';
import dayjs from 'dayjs';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: dayjs(),
      isCalendarVisible: false,
      isModalVisible: false,
      gender: '',
      isGenderModalVisible: false,
    };
  }

  handleImagePicker = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.error('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0].uri;
        this.setState({ selectedImage });
        this.toggleModal(); 
      }
    });
  };

  handleCamera = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled Camera');
      } else if (response.errorCode) {
        console.error('Camera Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0].uri;
        this.setState({ selectedImage });
        this.toggleModal(); 
      }
    });
  };
  handleCalendar = () => {
    this.setState({ isCalendarVisible: !this.state.isCalendarVisible });
  };

  setDate = (date) => {
    this.setState({ value: dayjs(date), isCalendarVisible: false });
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  toggleGenderModal = () => {
    this.setState({ isGenderModalVisible: !this.state.isGenderModalVisible });
  };

  selectGender = (gender) => {
    this.setState({ gender, isGenderModalVisible: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container1}>
            <TouchableOpacity>
              <View style={styles.arrowcontainer}>
                <Image
                  source={require('/Users/user/quivio/src/assets/image/arrow-left.png')}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.edittext}>Edit Profile</Text>
          </View>
          <View style={styles.profilecontainer}>
            <View style={styles.profileImage}>
              <TouchableOpacity onPress={this.toggleModal}>
                {this.state.selectedImage ? (
                  <Image
                    source={{ uri: this.state.selectedImage }}
                    style={styles.Imageprofile}
                  />
                ) : (
                  <Image
                    source={require('/Users/user/quivio/src/assets/image/profileimage.png')} // Default image
                    style={styles.Imageprofile}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.profiletext}>
              <Text style={styles.text1}>Profile Picture</Text>
              <TouchableOpacity onPress={this.toggleModal}>
                <Text style={styles.text2}>Change Photo</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ProfileTextInput placeholder={'Name'} />
          <ProfileTextInput placeholder={'UserName'} />
          <ProfileTextInput
            placeholder={'Birthday'}
            icon={Images.calender}
            onclick={this.handleCalendar}
            value={this.state.value.format('YYYY-MM-DD')}
          />

          {this.state.isCalendarVisible && (
            <View style={styles.calendarContainer}>
              <DateTimePicker
                value={this.state.value}
                onValueChange={this.setDate}
              />
            </View>
          )}

          <ProfileTextInput
            placeholder={'Gender'}
            icon={Images.bottomarrow}
            onclick={this.toggleGenderModal}
            value={this.state.gender}
          />

          <PhoneNumber text={"Change"} />
          <ProfileTextInput placeholder={'Email ID'} text={"Verify"} />
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttontext}>Update</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}
          onRequestClose={this.toggleModal}

        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalText}>
                <Text style={styles.modalText1}>Profile Photo</Text>
              </View>
              <TouchableOpacity onPress={this.handleImagePicker}>
                <View style={styles.gallary}>
                  <View style={styles.gallaryimage}>
                    <Image
                      source={require('/Users/user/quivio/src/assets/image/gallary.png')}
                      style={styles.imagegallary}
                    />
                  </View>
                  <Text style={styles.gallaryText}>Upload from Gallary</Text>
                  <View style={styles.gallaryimag1}>
                    <Image
                      source={require('/Users/user/quivio/src/assets/image/forwardarrow.png')}
                      style={styles.imagegallary1}
                    />
                  </View>

                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleCamera}>
                <View style={styles.gallary}>
                  <View style={styles.gallaryimage}>
                    <Image
                      source={require('/Users/user/quivio/src/assets/image/camera.png')}
                      style={styles.imagegallary}
                    />
                  </View>
                  <Text style={styles.gallaryText}>Use Camera</Text>
                  <View style={styles.gallaryimag1}>
                    <Image
                      source={require('/Users/user/quivio/src/assets/image/forwardarrow.png')}
                      style={styles.imagegallary1}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.gallary}>
                  <View style={styles.gallaryimage}>
                    <Image
                      source={require('/Users/user/quivio/src/assets/image/avtar.png')}
                      style={styles.imagegallary}
                    />
                  </View>
                  <Text style={styles.gallaryText}>Select a Avatar</Text>
                  <View style={styles.gallaryimag1}>
                    <Image
                      source={require('/Users/user/quivio/src/assets/image/forwardarrow.png')}
                      style={styles.imagegallary1}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.toggleModal}>
                <View  style={styles.closeView}>
                <Text style={styles.closeButton}>Close</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isGenderModalVisible}
          onRequestClose={this.toggleGenderModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent1}>
              <Text style={styles.modalText1}>Select Gender</Text>
              <TouchableOpacity onPress={() => this.selectGender('Male')}>
                <View style={styles.Malebox}>
                  <Text style={styles.genderOption}>Male</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.selectGender('Female')}>
                <View style={styles.Malebox}>
                  <Text style={styles.genderOption}>Female</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}




