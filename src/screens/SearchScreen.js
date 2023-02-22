import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

/* 
In order to be able to navigate to the "ResultsShowScreen" 
I need to pass the "navigation" object which is available 
to "SearchScreen", down to the child component so it can be 
called only when a user taps into a specific restaurant.
*/
const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  /* 
  The filter() method creates a shallow copy of a portion of a given array, 
  filtered down to just the elements from the given array that pass the test 
  implemented by the provided function.
  EXAMPLE:
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  const result = words.filter(word => word.length > 6);
  console.log(result);
  // Expected output: Array ["exuberant", "destruction", "present"] 
  */
  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar 
        term={term} 
        onTermChange={(newTerm) => setTerm(newTerm)} 
        onTermSubmit={() => searchApi(term)} 
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList 
          results={filterResultsByPrice('$')} 
          title="Cost Effective" 
          navigation={navigation}
        />
        <ResultsList 
          results={filterResultsByPrice('$$')} 
          title="Bit Pricier" 
          navigation={navigation}
        />
        <ResultsList 
          results={filterResultsByPrice('$$$')} 
          title="Big Spender" 
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;