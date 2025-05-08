import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import useWord from '../hooks/useWord';
import { HistoryContext } from '../context/HistoryContext';
import ShowList from '../components/ShowList';

const HistoryScreen = () => {
  const {history} = useContext(HistoryContext);
  const {loadHistory} = useWord();

  //load history from async storage when component mounts
  useEffect(() => {
    loadHistory();
  }, []);

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
              <ShowList data={item.definition} />
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
  definitionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 4,
  },
  indexText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 1,
    minWidth: 24,
  },
  definitionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 32,
  },
  errorText: {
    fontSize: 14,
    color: '#ff6b6b',
    fontStyle: 'italic',
  },
});

export default HistoryScreen;
