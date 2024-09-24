

import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: "#E6EDF3",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 20,
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
  reset: {
    fontSize: 17,
    marginTop: 10,
    color: "grey",
    fontWeight: "400",
  },
  reset1: {
    fontSize: 17,
    marginTop: 6,
    fontWeight: "400",
  },
  button: {
    backgroundColor: '#E6EDF3',
  },
  resend: {
    padding: 20,
    alignItems: "flex-end",
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  otpContainerInvalid: {
    borderColor: 'red',
  },
  otpInput: {
    width: 57,
    height: 50,
    borderRightWidth: 2,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    marginLeft: 2,
  },
  attemptMessage: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:20,
  },
  modalTitle1:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  backToLoginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    height:50,
    justifyContent:"center",
    alignItems:"center",
  },
  backToLoginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight:"600"
  },
  image1:{
    width:60,
    height:60,
    
  },
  modalimage:{
    width:60,
    height:60,
  }
});

export default styles;




