
import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, FlatList, Platform, Modal, Button } from 'react-native';
import strings from '../../utils/string';
import styles from './style';
import TextinputEmail from '../../components/Emailnput';
import Passwordinput from '../../components/passwordinput';
import PrimaryButton from '../../components/primarybutton';
import Images from '../../assets/image';

const arr = [
    {
        iconname: Images.graph,
        text1: "Aesthetical ",
        text2: "Graphics",
    },
    {
        iconname: Images.clock,
        text1: "Real Time",
        text2: "Statistics",
    },
    {
        iconname: Images.cup,
        text1: "Track ",
        text2: "Usage",
    }
];

export default class Signin extends Component {
    state = {
        email: '',
        password: '',
        errorMessage: '',
        failedAttempts: 0,
        showModal: false,
    };

    handleHome = () => {
        const { navigation } = this.props;
        navigation.reset({
            index: 0,
            routes: [{ name: 'forgetpassword' }],
        });
    };

    handlefa = () => {
        const { navigation } = this.props;
        const { email, password, failedAttempts } = this.state;

        if (email === 'A@gmail.com' && password === '1234567890') {
            navigation.reset({
                index: 0,
                routes: [{ name: 'bottom' }],
            });
            this.setState({ failedAttempts: 0, errorMessage: '' });
        } else {
            const newFailedAttempts = failedAttempts + 1;
            if (newFailedAttempts >= 3) {
                this.setState({ showModal: true, failedAttempts: 0, errorMessage: '' });
            } else {
                this.setState({ failedAttempts: newFailedAttempts, errorMessage: 'Invalid, please try again' });
            }
        }
    };

    handlepasswordChange = (password) => {
        this.setState({ password });
    }

    handleEmailChange = (email) => {
        this.setState({ email });
    };


    closeModal = () => {
        this.setState({ showModal: false });
    };

    renderItem = ({ item }) => {
        return (
            <View style={styles.renderItem}>
                <>
                    <Image
                        source={item.iconname}
                        style={{ height: 20, width: 20, marginTop: 10 }}
                    />
                    <View style={{ marginStart: 10 }}>
                        <Text style={{ color: 'white' }}>
                            {item.text1}
                        </Text>
                        <Text style={{ color: 'white' }}>
                            {item.text2}
                        </Text>
                    </View>
                </>
            </View>
        );
    };

    render() {
        const { email, errorMessage, showModal } = this.state;

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <View style={{ flex: 1, backgroundColor: "#E6EDF3" }}>
                    {errorMessage ? (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>{errorMessage}</Text>
                        </View>
                    ) : null}

                    <View style={styles.container}>
                        <Image
                            source={require('/Users/user/quivio/src/assets/image/signin.png')}
                            style={styles.image}
                        />
                        <View style={styles.flatListContainer}>
                            <FlatList
                                data={arr}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={this.renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>

                    <View style={styles.container2}>
                        <Text style={styles.text1}>{strings.text1}</Text>
                        <Text style={styles.text2}>{strings.text2}</Text>

                        <TextinputEmail onEmailChange={this.handleEmailChange} />

                        <Passwordinput onPassword={this.handlepasswordChange} />
                        <TouchableOpacity onPress={this.handleHome}>
                            <Text style={styles.forget}>{strings.Forget}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.handlefa}>
                        <PrimaryButton title={strings.Primary} />
                    </TouchableOpacity>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={this.closeModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <View style={styles.modalimage}>
                                <Image
                                    source={require('/Users/user/quivio/src/assets/image/redlock.png')}
                                    style={styles.image1}
                                />
                            </View>
                            <Text style={styles.modalText}>{strings.Account_Locked}</Text>
                            <Text style={styles.modalText1}>{strings.your_account} </Text>
                            <Text style={styles.modalText1}> {strings.Too_many} </Text>
                            <Text style={styles.modalText1}> {strings.again_after}</Text>
                            <TouchableOpacity style={styles.backToLoginButton} onPress={this.closeModal}>
                                <Text style={styles.backToLoginButtonText}>{strings.ok}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </KeyboardAvoidingView>
        );
    }
}



