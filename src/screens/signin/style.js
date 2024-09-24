
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 390,
        position: 'relative',
    },
    image: {
        height: 390,
        width: "100%",
        marginBottom:10,
       
    },
    container2: {
        padding: 20,
        backgroundColor: "#E6EDF3",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0, 
    },
    text1: {
        fontWeight: "700",
        fontSize: 27,
    },
    text2: {
        fontWeight: "400",
        fontSize: 15,
        color: "grey",
        marginTop: 5,
    },
    forget: {
        marginTop: 20,
        marginLeft: 240,
        fontWeight: "500",
    },
    renderItem: {
        margin: 20,
        padding: 5,
        borderRadius: 20,
        flexDirection: 'row',
    },
    flatListContainer: {
        position: 'absolute',
        bottom:0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    stickyButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#E6EDF3",
        alignItems: 'center',
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
    buttonContainer: {
        padding: 20,
         backgroundColor:"#E6EDF3",
         paddingTop:0,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: "80%",
        height:220,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:"center",
        alignItems:"center",
    },
    modalText: {
        marginBottom: 10,
        fontWeight:"700",
        fontSize:20,
    },
    modalText1:{
        fontWeight:"400",
        fontSize:15,
        color:"grey",
    },
    backToLoginButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
      },
      backToLoginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight:"600",
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




