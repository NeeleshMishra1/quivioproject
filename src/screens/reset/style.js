import { StyleSheet} from "react-native";


const styles = StyleSheet.create({
safearea:{
     backgroundColor:"#E6EDF3",
     flex:1,
},
arrowcontainer:{
    width: 100,
    height: 100,
    borderRadius:5,
    marginLeft:5,
},
image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 5,
  },
  forget:{
    fontWeight:"700",
    fontSize:25,
    marginTop:50,
    
  },
  container1:{
    margin:20,
  },
  reset:{
    fontSize:18,
    marginTop:10,
    color:"grey",
    fontWeight:"300"
  },
  button:{
     paddingTop:250,
  }
   
});

export default styles;


