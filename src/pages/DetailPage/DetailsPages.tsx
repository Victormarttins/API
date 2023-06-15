import { View,Text,  StyleSheet, } from "react-native";
import { Image } from 'expo-image';

export default function DetailsPage({route,navigation}){
    const {id,position,team_shield_url,team_name,team_points,team_gols_pro,team_saldo_gols} = route.params
    console.log('chegou')
    return(
  <View>
    
    <Text style={styles.text}>{team_name}</Text>
    <Image style={styles.img} source={team_shield_url}/>
    <View style={styles.iten}>
            <Text style={styles.pts}>PTS:{team_points}</Text>
            <Text style={styles.gl}>GLS : {team_gols_pro}</Text>
            <Text style={styles.SG}>SG : {team_saldo_gols}</Text>
          </View>
  </View>
    );
}
const styles = StyleSheet.create({
  
    
    team_shield: {
      width: 35,
      height: 30
    },
    team_name: {
      fontSize: 20,
      width: 150,
      textAlign: 'center',
      fontWeight: 'bold',
      borderRadius: 20
    },
   
  
    iten: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingHorizontal: 16,
      width:30,
      height: 30,
      marginRight: 8,
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
        fontSize: 20,
        width: 150,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 20,
        marginLeft:115,
      marginTop:20
    }
  
  
  
  });