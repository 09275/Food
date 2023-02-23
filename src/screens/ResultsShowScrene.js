import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
  const id = navigation.getParam('id');
  console.log(id);
  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;