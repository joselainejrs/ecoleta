import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({

  pagehome: {
        flex: 1,     
        paddingTop: Constants.statusBarHeight + 30,
      },

      imgbackground:{
        width: 200, 
        height: 200,
        marginLeft: 50,
        marginTop: 50,
     },

      content:{
        paddingLeft: 30,
      },

      linkcoleta:{          
        flexDirection: 'row', 
        marginLeft: 150, 
      },
    
      btncoleta:{ 
        fontSize: 15,
        color: '#322153',
        fontWeight: 500,   
      },

  imglogo:{
        height: 45,
        width: 195,  
        color: '#322153',
        marginTop: 90,  
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  titulo:{
      color: '#322153',
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: 'Arial, Helvetica, sans-serif',
      marginTop: 90,
      maxWidth: 350,
  },

  descricao:{
      color: '#322153',
      fontSize: 16,
      marginTop: 10,
      marginBottom: 90,
      maxWidth: 300,
  },
   
  caixabtn:{
    borderRadius: 8, 
    width: 300,
    height: 50,
    backgroundColor:'#34cb79',
    marginLeft: 20,
    marginBottom: 20,
  },

  link:{          
    flexDirection: 'row', 
  },

  btn:{
    padding: 10, 
    fontSize: 20,
    color: '#fff',
    fontWeight: 500,
   
  },
  
})

