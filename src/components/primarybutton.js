import React, { Component } from 'react';
import { View, StyleSheet ,TouchableOpacity,Text} from 'react-native';
import strings from '../utils/string';


export default class PrimaryButton extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.primary}>{this.props.title}</Text>
          </View>
    );
  }
}


const styles = StyleSheet.create({
    
    Container:{
      height:55,
      borderRadius:5,
      marginTop:30,
      flexDirection:"row",
      borderWidth:1,
      backgroundColor:"#3289C2",
      borderColor:"#3289C2",
      justifyContent:"center",
      alignItems:"center",
    },
    primary:{
        color:"white",
        fontWeight:"700",
        fontSize:18,

    }   
    });

