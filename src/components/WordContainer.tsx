import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const WordContainer = () => {
  const {loading, word, wordDefinition} = useContext(AppContext)
  return (
    <View style={styles.contentContainer}>
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#1a1a1a" />
                <Text style={styles.loadingText}>Loading word...</Text>
              </View>
            ) : (
              <View style={styles.wordContainer}>
                <Text style={styles.word}>{word}</Text>
                <View style={styles.definitionContainer}>
                  <Text style={styles.definitionLabel}>Definition:</Text>
                  <Text style={styles.definition}>{wordDefinition}</Text>
                </View>
              </View>
            )}
          </View>
  )
}

export default WordContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  historyButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  historyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loadingContainer: {
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
    padding: 25,
    width: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  word: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  definitionContainer: {
    marginTop: 10,
  },
  definitionLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  definition: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  getNewWordButton: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
