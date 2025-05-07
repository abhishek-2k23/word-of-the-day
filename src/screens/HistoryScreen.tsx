import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import useWord from '../hooks/useWord';

const HistoryScreen = () => {
    const { history } = useWord();

    return (
        <ScrollView style={styles.container}>
            {history.length === 0 ? (
                <Text style={styles.emptyText}>No words in history yet</Text>
            ) : (
                history.map((item, index) => (
                    <View key={index} style={styles.historyItem}>
                        <Text style={styles.word}>{item.word}</Text>
                        <Text style={styles.definition}>{item.definition}</Text>
                    </View>
                ))
            )}
        </ScrollView>
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
        shadowOffset: { width: 0, height: 2 },
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