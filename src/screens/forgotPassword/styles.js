import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: "#E6EDF3",
    flex: 1,
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
  },
  reset: {
    fontSize: 17,
    marginTop: 10,
    color: "grey",
    fontWeight: "400"
  },
  button: {
    paddingTop: 100,
  },
  errorContainer: {
    backgroundColor: 'red',
    width: "90%",
    height: 40,
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 7,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  errorText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: "80%",
    height: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    marginBottom: 10,
    fontWeight: "700",
    fontSize: 20,
  },
  modalText1: {
    fontWeight: "400",
    fontSize: 15,
    color: "grey",
  },
  modalButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "600",
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
