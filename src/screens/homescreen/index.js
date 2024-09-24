
import React, { Component } from 'react';
import { View, Image, Text,FlatList, ScrollView} from 'react-native';
import strings from '../../utils/string';
import styles from './style';
import Images from '../../assets/image';
import data from '../../components/recent';


const arr = [
    {
        iconname: Images.speaker,
        text1: "Create ",
        text2: "Campaign",
    },
    {
        iconname: Images.onetime,
        text1: "One Time",
        text2: "Trigger",
    },
    {
        iconname: Images.speaker,
        text1: "Create ",
        text2: "Campaign",
    },
    {
        iconname: Images.onetime,
        text1: "One Time",
        text2: "Trigger",
    },
];


const activityData = Array(15).fill({});

export default class Homescreen extends Component {
    state = {
        isModalVisible: false,
    };

    componentDidMount() {
        this.setState({ isModalVisible: true });
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    handlePhone = () => {
        const { navigation } = this.props;
        this.setState({ isModalVisible: false });
        setTimeout(() => {
            if (navigation) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'addphone' }],
                });
            } else {
                console.log('Navigation prop not available');
            }
        }, 1000);
    };

    renderItem = ({ item }) => {
        return (
            <View style={styles.renderItem}>
                <>
                <View style={styles.flatimage} >
                    <Image
                        source={item.iconname}
                        style={{ height: 20, width: 20, marginTop: 10 }}
                    />
                    </View>
                    <View style={{ marginStart: 10 }}>
                        <Text style={{ color: "black" }}>
                            {item.text1}
                        </Text>
                        <Text style={{ color: 'black' }}>
                            {item.text2}
                        </Text>
                    </View>

                </>
            </View>
        );
    };


    renderActivity = () => {
        return activityData.map((_, index) => (
            <View key={index} style={styles.activitycontainer}>
                <View style={styles.activitycontainer1}>
                    <Image 
                        source={require('/Users/user/quivio/src/assets/image/twoperson.png')} 
                        style={styles.imageactivity} 
                    />
                </View>
                <View style={styles.activitycontainer2}>
                    <Text style={styles.successful}>{strings.successfully}</Text>
                    <Text style={styles.date}>{strings.date}</Text>
                </View>
            </View>
        ));
    };



    render() {
        const { isModalVisible } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <View>
                        <Text style={styles.welcometext}>{strings.welcome}</Text>
                        <Text style={styles.kevintext}>{strings.kevin}</Text>
                    </View>
                    <View style={styles.arrowcontainer}>
                        <View style={styles.imagecontainer}>
                            <Image source={require('/Users/user/quivio/src/assets/image/message.png')} style={styles.image} />
                        </View>
                        <View style={styles.imagecontainer}>
                            <Image source={require('/Users/user/quivio/src/assets/image/bell.png')} style={styles.image} />
                        </View>
                    </View>
                </View >
                <View style={styles.containe1}>

                    <View style={styles.complete}>
                        <View style={styles.imagecontainer}>
                            <Image source={require('/Users/user/quivio/src/assets/image/message.png')} style={styles.image} />
                        </View>
                        <View>
                            <Text style={styles.completetext}>{strings.Complete}</Text>
                            <Text style={styles.tagtext}>{strings.Tap}</Text>
                        </View>
                    </View>
                    <Text style={styles.Frequentlytext}>{strings.Frequently}</Text>
                    <View style={styles.flatListContainer}>
                            <FlatList
                                data={arr}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={this.renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                       <View style={styles.Resettext}>
                        <Text style={styles.Resent_activities}>{strings.Resent_activities}</Text>
                        <Text style={styles.All_product}>{strings.All_Product}</Text>
                       </View>
                       <View style={styles.activity}>
                        <ScrollView>
                       {this.renderActivity()}
                       </ScrollView>
                       
                       </View>
                </View>
            </View>
        );
    }
}



