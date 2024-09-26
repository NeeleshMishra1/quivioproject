import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding:10,
    position:"relative"
  },
  arrowcontainer: {
    width: 50,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
    marginTop: 5,
  },
  container1: {
    flexDirection:"row",
    alignItems:"center",
    paddingTop:40,
    
  },
  edittext:{
    marginLeft:70,
    fontWeight:"600",
    fontSize:20,
  },
  profilecontainer:{
    height:200,
    alignItems:"center",
    padding:10,
    flexDirection:"row",
  },
  profileImage:{
    backgroundColor:"#E1EBFE",
    width:150,
    height:150,
    marginLeft:5,
    borderRadius:100
  },
  profiletext:{
    marginLeft:20,
  },
  text1:{
    fontWeight:"400",
    color:"grey",
    fontSize:15,
  },
  text2:{
    fontWeight:"600",
    color:"#EE29A9",
    fontSize:17,
    marginTop:10,
  },
  Imageprofile:{
    width:150,
    height:150,
    borderRadius:100,
  },
  button:{
    height:55,
    backgroundColor:"#000080",
    margin:10,
    marginTop:0,
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center",
  },
  buttontext:{
    color:"white",
    fontWeight:"700",
    fontSize:17,
  },
  calender: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height:"60%",
  },
  modalText1: {
    fontSize: 18,
    fontWeight:"700"
  },
  closeButton: {
    fontSize: 20,
    color: '#007BFF',
    fontWeight:"700",

  },
  modalText:{
    height:60,
    borderBottomWidth:2,
    borderColor:"#ccc",
    justifyContent:"center",
  },
  gallary:{
    height:100,
    borderRadius:15,
     backgroundColor:"#F7F9FA",
    marginTop:20,
    flexDirection:"row",
  alignItems:"center",
  padding:20,
  position:"relative",
  },
  gallaryimage:{
    width:60,
    height:60,
  },
  imagegallary:{
    width:65,
    height:65,
  },
  gallaryText:{
    fontWeight:"700",
    fontSize:18,
    marginLeft:10,
  },
  imagegallary1:{
    resizeMode:"contain"
  },
  gallaryimag1:{
    width:20,
    height:20,
    position:"absolute",
    right:10,
  },
  calendarContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -175 }, { translateY: -150 }], 
    zIndex: 1,
    width: 350, 
    height: 350, 
    backgroundColor: '#edfafa', 

    borderRadius: 10,
  },
modalContent1:{
  backgroundColor: 'white',
  padding: 20,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  height:"30%",
},
Malebox:{
  backgroundColor:"#F7F9FA",
  height:70,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:15,
  marginTop:10
},
genderOption:{
  fontSize:20,
  fontWeight:"700",
},
closeView:{
  justifyContent:"center",
  alignItems:"center",
  padding:10,
}
});
export default styles;
