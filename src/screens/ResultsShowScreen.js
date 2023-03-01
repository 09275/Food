import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

/*
  When I need to communicate some information from one screen
  to another (in this case from ResultsList which is not a screen
  but it does use the 'navigation' property), in order to get 
  the data (in this case {id: item.id}) from one screen to the 
  other, I use the 'navigation' property and then 
  the navigation.getParam() function.
  Note: I cannot use the information directly into the props 
  object like (const ResultsShowScreen = ({ id }) => ..)
  The reason is that the 'props' object is information 
  communicated from a parent component! So in this case 
  I will need to do it through the navigation property.
*/
const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  };

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        keyExtractor={(photo) => photo}
        data={result.photos}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />
        }}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;