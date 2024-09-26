import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textinputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding:15,
    paddingTop:0,

  },
  countryPickerContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:"#ccc",
    width:70,

  },
  phoneInputContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: 'center',
    width: '80%', 
    height: 60,
    marginLeft: 10, 
    borderWidth:1,
    borderColor:"#ccc"
  },
  phoneInput: {
    fontSize: 16,
    color: "black",
    marginLeft: 10,
  },
  errorContainer: {
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    borderRadius: 5,
  },
  errorMessage: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  text1:{
    position:"absolute",
    right:20,
    fontSize:17,
    fontWeight:"600",
    color:"#EE27A9"
  },
});

export default styles;
