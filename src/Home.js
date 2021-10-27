import React, {useState, useEffect  } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

const Home = props => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("/api/pokemons")
      .then( res => res.json())
      .then( json => {
        console.error(json)
        setPokemons(json.pokemons)
      })
       .catch( error => {
        console.error(error);
      });
  }, [])

  const handlePress = pokemon => {
    props.selectPokemon(pokemon);
    props.history.push('/pokemon');
  };

  return (
    <View>
      <FlatList
        keyExtractor={pokemon => pokemon.number}
        data={pokemons}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default Home;
