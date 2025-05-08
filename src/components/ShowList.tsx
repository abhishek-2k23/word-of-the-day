import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

interface ShowListProps {
  data: string;
}

function ShowList({data}: ShowListProps) {
  const dataArray = data?.split(',').slice(0, 5);

  return (
    <View style={styles.container}>
      <FlatList
        data={dataArray}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        initialNumToRender={3}
        renderItem={({item, index}) => (
          <View style={styles.dataContainer}>
            {dataArray.length > 1 && (
              <Text style={styles.indexText}>{index + 1}.</Text>
            )}
            <Text style={styles.dataText}>{item.trim()}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default ShowList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 4,
  },
  indexText: {
    color: '#111',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 1,
    minWidth: 24,
  },
  dataText: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    lineHeight: 24,
  },
});
