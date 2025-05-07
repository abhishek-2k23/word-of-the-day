import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {AppContext} from '../context/AppContext';
import useWord from '../hooks/useWord';
const HomeScreen = () => {
  const navigation = useNavigation();
  const {word, wordDefinition, loading} = useContext(AppContext);
  const {fetchRandomWord} = useWord();

  useEffect(() => {
    fetchRandomWord();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('History' as never)}
        style={styles.history}>
        <Text style={styles.historyText}>History</Text>
      </TouchableOpacity>
      {
        loading ? <View><Text> Loading </Text></View> : <View> 
        <Text>{word}</Text>
        <Text>{wordDefinition}</Text> </View>
      }
      <TouchableOpacity
        onPress={fetchRandomWord}
        style={styles.getNewWord}>
        <Text style={styles.historyText}>Get new word</Text>
      </TouchableOpacity>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  history: {
    width: 100,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1a1a1a',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  historyText: {
    fontSize: 20,
  },
  input: {
    width: 200,
    height: 20,
    borderColor: '#1a1a1a',
  },
  getNewWord: {
    width: 140,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1a1a1a',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
