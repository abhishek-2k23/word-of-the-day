import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import useWord from '../hooks/useWord';
import DefinitionList from '../components/DefinitionList';

const HistoryScreen = () => {
  const {history} = useWord();

  return (
    <View style={styles.container}>
      {history.length === 0 ? (
        <Text style={styles.emptyText}>No words in history yet</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item) => item.word}
          renderItem={({item, index}) => (
            <View key={index} style={styles.historyItem}>
              <Text style={styles.word}>{item.word}</Text>
              <DefinitionList definition={item.definition}/>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  historyItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  word: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  definition: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 32,
  },
});

export default HistoryScreen;
