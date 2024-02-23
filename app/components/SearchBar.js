import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors';

const SearchBar = ({ value, onClear, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder='Search'
      />
      {value ? (
        <AntDesign
          name='close'
          size={20}
          color={colors.PRIMARY}
          onPress={onClear}
          style={styles.clearIcon}
        />
      ) : <AntDesign
      name='search1'
      size={20}
      color={colors.PRIMARY}
      onPress={onClear}
      style={styles.clearIcon}
    />}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0.5,
    borderColor: colors.PRIMARY,
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 15,
    color: colors.GREY,
  },
  container: {
    justifyContent: 'center',
    marginVertical: 15
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
  },
});

export default SearchBar;
