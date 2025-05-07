import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import useWord from '../hooks/useWord';
import WordContainer from '../components/WordContainer';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {fetchRandomWord} = useWord();

  useEffect(() => {
    fetchRandomWord();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Word of the Day</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('History' as never)}
          style={styles.historyButton}>
          <Text style={styles.historyText}>History</Text>
        </TouchableOpacity>
      </View>

      {/* word with definition  */}
      <WordContainer />

      <TouchableOpacity onPress={fetchRandomWord} style={styles.getNewWordButton}>
        <Text style={styles.buttonText}>Get New Word</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    letterSpacing: 0.5,
  },
  historyButton: {
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
