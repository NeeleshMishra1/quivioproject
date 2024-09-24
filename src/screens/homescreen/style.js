
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2B7BBB",
        paddingTop: 60,
    },
    containe1: {
        flex: 1,
        backgroundColor: "#E6EDF3",
        padding: 15,
        paddingBottom:0,
    },
    container2: {
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#2B7BBB",
        paddingTop: 10,
        padding: 20,
    },
    welcometext: {
        fontSize: 17,
        fontWeight: "300",
        color: "white",
    },
    kevintext: {
        fontWeight: "600",
        fontSize: 20,
        color: "white",
    },
    arrowcontainer: {
        borderRadius: 5,
        flexDirection: "row"
    },
    image: {
        width: 35,
        height: 30,
        resizeMode: 'contain',
        marginTop: 5,
    },
    imagecontainer: {
        backgroundColor: "white",
        width: 45,
        height: 45,
        borderRadius: 5,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    complete: {
        backgroundColor: "#DCE8FD",
        height: 80,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    completetext: {
        fontWeight: "700",
        fontSize: 16,
        marginLeft: 10,
    },
    tagtext: {
        fontSize: 15,
        color: "grey",
        marginTop: 10,
        marginLeft: 10,
    },
    Frequentlytext: {
        fontSize: 16,
        marginTop: 30,
        fontWeight: "400",
    },
    renderItem: {
        margin: 10,
        marginLeft: 0,
        paddingLeft: 10,
        borderRadius: 10,
        flexDirection: 'row',
        height: 60,
        width: 150,
        backgroundColor: "white",
        alignItems: "center",
    },
    flatimage: {
        backgroundColor: "#46A4BA",
        height: 40,
        width: 40,
        alignItems: "center",
        borderRadius: 50
    },
    Resettext:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10,
    },
    Resent_activities:{
        fontWeight:"600",
    },
    All_product:{
        color:"#2B7BBB",
        fontWeight:"600",
        fontSize:15,
    },
    activity:{
        height:100,
        backgroundColor:"white",
        flex:1,
        borderRadius:10,
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
        padding:10,

    },
    activitycontainer:{
        height:80,
        borderBottomWidth:1,
        borderBottomColor:"grey",
        flexDirection:"row"
    
    },
    image1: {
        width: 30,
        height: 30,
      },
      activitycontainer1:{
        width:70,
        justifyContent:"center",
        alignItems:"center",

      },
      activitycontainer2:{
        width:"80%",
        justifyContent:"center"
      },
      imageactivity:{
        width:40,
        height:40,
      },
      successful:{
        fontWeight:"600",
        fontSize:15,
      },
      date:{
        color:"grey",
        marginTop:5,
      }
});

export default styles;




