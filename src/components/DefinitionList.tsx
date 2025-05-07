import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

interface DefinitionListProps {
  definition: string;
}

function DefinitionList({definition}: DefinitionListProps) {
  const definitionsArray = definition.split(',').slice(0, 5); // Limit to maximum 5 definitions

  return (
    <View style={styles.container}>
      <FlatList
        data={definitionsArray}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        initialNumToRender={3}
        renderItem={({item, index}) => (
          <View style={styles.definitionContainer}>
            {definitionsArray.length > 1 && (
              <Text style={styles.indexText}>{index + 1}.</Text>
            )}
            <Text style={styles.definitionText}>{item.trim()}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

export default DefinitionList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
});
