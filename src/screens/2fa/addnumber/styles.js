import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: "#E6EDF3",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  arrowcontainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
    marginTop: 5,
  },
  forget: {
    fontWeight: "700",
    fontSize: 25,
    marginTop: 50,
  },
  container1: {
    margin: 20,
    flex: 1,
  },
  reset: {
    fontSize: 17,
    marginTop: 10,
    color: "grey",
    fontWeight: "400",
  },
  countryPickerContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    width: 55,
    height: 55,
  },
  phoneInputContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent:"center",
    
    width: 55,
    height: 55,
    flex: 1,
    marginLeft: 20,
  },
  phoneInput: {
    fontSize: 16,
    color: "black",
    marginLeft: 10,
  },
  button: {
    padding: 20,
    backgroundColor: '#E6EDF3',
  },
  textinputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default styles;
