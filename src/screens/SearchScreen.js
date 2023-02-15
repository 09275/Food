import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  /*Everytime you make an api request or any type of 
    network request, remember that is an asyncrhonous
    operation. So you need to add in a promise, to handle
    the search results that you will eventually get back */
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  /*useEffect is a hook (essentially a function) that allows us
    to run some code just one time when our component is first
    rendered to the screen.
    #--Run the arrow function every time the component is rendered--#
        ** useEffect(() => {}) 
    #--Run the arrow function only when the component is first rendered--#
        ** useEffect(() => {}, [])
    #--Run the arrow function only when the component is first rendered,
       and when the 'value' changes--#
        ** useEffect(() => {}, [value]) */
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={(newTerm) => setTerm(newTerm)} 
        onTermSubmit={() => searchApi(term)} 
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;