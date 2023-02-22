import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetails';

/*
  In order for the "ResultsList" to have directly access to the 
  "navigation" prop (which is only available to screens which 
  are wired in the React Stack Navigator using the 
  createStackNavigator in the App.js file), we use the 
  {withNavigation} in order to take the "navigation" prop and 
  inject it directly into the "ResultsList" component.
*/
const ResultsList = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        data={results}
        renderItem={({item}) => {
          return (
            <TouchableOpacity 
              onPress={() => navigation.navigate('ResultsShow')}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15, 
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);