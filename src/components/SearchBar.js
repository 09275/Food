import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Use https://icons.expo.fyi/ for icons

/* Notes on passing the "onTermChange" and "onTermSubmit":
   onChangeText={onTermChange}
   onEndEditing={onTermSubmit}
   The above are equivalent to:
   onChangeText={newTerm => onTermChange(newTerm)}
   onEndEditing={() => onTermSubmit()}
   ----------------------------------------
   I can do exactly the same with "SearchScreen"
   onTermChange={setTerm}
   onTermSubmit={searchApi}
*/
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle} 
        placeholder='Search'
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;