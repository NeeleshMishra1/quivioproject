
import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Modal } from 'react-native';
import strings from '../../utils/string';
import styles from './style';
import PrimaryButton from '../../components/primarybutton';
import Homescreen from '../homescreen';

export default class FA extends Component {
    state = {
        isModalVisible: true,
    };
    componentDidMount() {
        this.setState({ isModalVisible: true });
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        this.props.navigation.navigate('addphone');
    };
    render() {
        const { isModalVisible } = this.state;

        return (
            <View style={styles.container1}>
                <Homescreen/>

                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={this.toggleModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <View style={styles.modalphonecontainer}>
                                <Image source={require('/Users/user/quivio/src/assets/image/phone.png')} style={styles.image1} />
                            </View>
                            <Text style={styles.secure}>{strings.secure}</Text>
                            <Text style={styles.securetext}>{strings.secure_setup}</Text>
                            <Text style={styles.securetext1}>{strings.secure_setup1}</Text>

                            <View style={styles.modalimage}>
                                <View style={styles.modalimagecontainer}>
                                    <Image source={require('/Users/user/quivio/src/assets/image/call.png')} style={styles.imagemodal} />
                                </View>
                                <Text style={styles.textlink}>{strings.link}</Text>
                            </View>

                            <View style={styles.modalimage}>
                                <View style={styles.modalimagecontainer}>
                                    <Image source={require('/Users/user/quivio/src/assets/image/threedot.png')} style={styles.imagemodal} />
                                </View>
                                <Text style={styles.textlink}>{strings.enter_the}</Text>
                            </View>

                            <View style={styles.modalimage}>
                                <View style={styles.modalimagecontainer}>
                                    <Image source={require('/Users/user/quivio/src/assets/image/check.png')} style={styles.imagemodal} />
                                </View>
                                <Text style={styles.textlink}>{strings.secure_your}</Text>
                            </View>
                            <TouchableOpacity onPress={this.toggleModal }>
                                <PrimaryButton title={strings.get_started} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}





