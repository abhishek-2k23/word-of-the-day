import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import ShowList from './ShowList';

const WordContainer = () => {
  const {loading, word, wordDefinition, example} = useContext(AppContext);
  return (
    <View style={styles.contentContainer}>
      {loading || !(word && wordDefinition && example) ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1a1a1a" />
          <Text style={styles.loadingText}>Loading word...</Text>
        </View>
      ) : (
        <View style={styles.wordContainer}>
          <Text style={styles.word}>{word}</Text>
          <View style={styles.definitionContainer}>
            <Text style={styles.Label}>Definition:</Text>
            <ShowList data={wordDefinition} />
          </View>
          <View style={styles.definitionContainer}>
            <Text style={styles.Label}>Example:</Text>
            <ShowList data={example} />
          </View>
        </View>
      )}
    </View>
  );
};

export default WordContainer;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  wordContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  word: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2f2f2f',
    textAlign: 'center',
    marginBottom: 15,
    textTransform: 'capitalize',
  },
  definitionContainer: {
    width: '100%',
  },
  Label: {
    fontSize: 18,
    color: '#101',
    marginBottom: 8,
    fontWeight: '600',
  },
  example: {
    fontSize: 16,
    color: '#444',
  },
});
