import { View,Text,  StyleSheet, } from "react-native";
import { Image } from 'expo-image';
import React from "react";

export default function DetailsPage({route,navigation}){
    const {id,position,team_shield_url,team_name,team_points,team_gols_pro,team_saldo_gols} = route.params
    console.log('chegou')
    return(
  <View style={styles.container}>
    <View>
    <Text style={styles.text}>{team_name}</Text>
    <Image style={styles.img} source={team_shield_url}/>
    <View style={styles.iten}>
    
            <Text style={styles.iten}>PTS:{team_points}</Text><br></br>
            <Text style={styles.iten}>GLS:{team_gols_pro}</Text><br></br>
            <Text style={styles.iten}>SG:{team_saldo_gols}</Text>
          </View>
      </View>

  </View>
    );
}
const styles = StyleSheet.create({
  container:{
  backgroundColor:'gray'
  },
    
    team_shield: {
      width: 35,
      height: 30
    },
    team_name: {
      fontSize: 20,
      width: 150,
      textAlign: 'center',

      borderRadius: 20
    },
   
  
    iten: {
      flex:1,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:50,
      marginHorizontal:110,

      fontSize:20
    },
    pts: {
      width: 30,
      fontSize: 15,
      
      
    },
    gl: {
      width: 30,
      fontSize: 15,
    },
    SG: {
      width: 30,
      fontSize: 15,
    },
    img:{
        width: 90,
      height: 80,
      justifyContent:'space-between',
      alignItems:'center',
      marginLeft:150,
      marginTop:20
    
    },
    text:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal:110,
    marginHorizontal:20,
   
      fontSize:20

      
      
      
    }
  
  
  
  });