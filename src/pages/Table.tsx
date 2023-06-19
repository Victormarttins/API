import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';

import React from 'react';
import GameEntity from '../entities/Game_entityes';

export default function App() {
  const [games, setGames] = useState<GameEntity[]>([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer test_dd769753f45f74346dbf9e43181a45');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    let gamesList: GameEntity[] = [];

    fetch('https://api.api-futebol.com.br/v1/ao-vivo', requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(dataJson => {
        dataJson.map((game: any) => {
          const dataGame: GameEntity = {
            partida_id: game['partida_id'],
            placar: game['placar'],

            time_mandante: {
              time_id: game['time_mandante']['time_id'],
              nome_popular: game['time_mandante']['nome_popular'],
              sigla: game['time_mandante']['sigla'],
              escudo: game['time_mandante']['escudo'],
            },

            time_visitante: {
              time_id: game['time_visitante']['time_id'],
              nome_popular: game['time_visitante']['nome_popular'],
              sigla: game['time_visitante']['sigla'],
              escudo: game['time_visitante']['escudo'],
            },

            placar_mandante: game['placar_mandante'],
            placar_visitante: game['placar_visitante'],
            campeonato_nome: ''
          };
          

          gamesList.push(dataGame);
        });
        setGames(gamesList);
        console.log(gamesList);
      })
      .catch(error => console.log('error', error));
  }, []);

  const renderGame = ({ item }: { item: GameEntity }) => ( 
 
    

      
    <View style={styles.cardGame}>
    
        
 
    
        <View>
      
          <Image style={styles.img} source={{ uri: item.time_mandante.escudo }} />
          <Text>{item.time_mandante.nome_popular}</Text>
        </View>
       
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 90 }}>
            <Text style={{ alignItems: 'center', fontSize: 20 }}>{item.placar_mandante}
            </Text>
            <Text style={{ padding: 30, fontSize: 20 }}>:</Text>
            <Text style={{ alignItems: 'center', marginHorizontal: 3, fontSize: 20 }}> {item.placar_visitante}</Text>

          </View>

        </View>


        <View>
          <Image style={styles.img} source={{ uri: item.time_visitante.escudo }} />
          <Text>{item.time_visitante.nome_popular}</Text>
        </View>
      </View>
      
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleChamp}>Campeonato Brasileiro A</Text>
      <FlatList
        data={games}
        renderItem={renderGame}
        keyExtractor={item => item.partida_id.toString()}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(61,65,90)',
    alignItems: 'center',
    borderRadius:25,


  },

  titleChamp: {
    color: 'white',
    flexDirection: 'row',
    marginTop: 30,
    fontSize: 25,
    fontWeight: '900',
    justifyContent: 'space-between',
    marginHorizontal:200

    

  },

  cardGame: {
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: 30,
    maxWidth: '100%',


  },

  
  img:{
     width: 50, 
     height: 50 
  }
 


});