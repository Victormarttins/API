
import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import TeamEntity from '../entities/team_entity';
import { Image } from 'expo-image';
import DetailsPage from './DetailPage/DetailsPages';

export default function HomePage({ navigation }) {

  const [teams, setTeam] = useState<TeamEntity[]>([]);


  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer test_b7555f93259e437fd7031592dce53a");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    let teamsPosition: TeamEntity[] = [];

    fetch("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(dataJson => {
        dataJson.map((team) => {

          const dataTeam = {
            id: team['time']['time_id'],
            position: team['posicao'],
            team_shield_url: team['time']['escudo'],
            team_name: team['time']['nome_popular'],
            team_points: team['pontos'],
            team_gols_pro: team['gols_pro'],
            team_saldo_gols: team['saldo_gols']
          };

          teamsPosition.push(dataTeam);
        });
        setTeam(teamsPosition);
        console.log(teamsPosition);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabela Brasileirão série B</Text>
      <View style={styles.table}>

       

          <View style={styles.itens}>
            <Text style={styles.pts}>PTS</Text>
            <Text style={styles.gl}>GLS</Text>
            <Text style={styles.SG}>SG</Text>
          </View>
          <FlatList
            data={teams}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(team) =>
            
              <TouchableHighlight
              
    
                onPress={() => navigation.navigate('DetailsPage',team.item)}
               >
                
        
               
              
               <View style={styles.item}>
                <Image style={styles.team_shield} source={team.item.team_shield_url} />
                <Text style={styles.position}>{team.item.position}</Text>
                <Text style={styles.team_name}>{team.item.team_name}</Text>
                <Text style={styles.position}>{team.item.team_points}</Text>
                <Text style={styles.position}>{team.item.team_gols_pro}</Text>
                <Text style={styles.position}>{team.item.team_saldo_gols}</Text>
               </View>
               </TouchableHighlight>
            

            }

          />

        </View>


    
    </View>






  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 30
  },
  table: {
    flex: 1,
    width: '100%'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 8,
    height: 50
  },
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
  position: {
    width: 30,
    fontSize: 20,
  },

  itens: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    height: 20,
    marginHorizontal: 235,
    marginRight: 8
  },
  pts: {
    width: 30,
    fontSize: 10,
  },
  gl: {
    width: 30,
    fontSize: 10,
  },
  SG: {
    width: 30,
    fontSize: 10,
  },
  



});