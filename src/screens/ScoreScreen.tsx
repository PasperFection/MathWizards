import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LeaderboardItem } from '../types/LeaderboardItem';

/**
 * ScoreScreen component
 * 
 * Dit component toont een overzicht van de scores van de speler.
 * Het bevat een placeholder voor een grafiek en statistieken over de scores.
 * 
 * @returns {React.FC} Een functioneel React-component
 */
const ScoreScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Score Overzicht</Text>
            <View style={styles.chartContainer}>
                {/* Hier zou de implementatie van de grafiek komen */}
                <Text style={styles.placeholder}>Grafiek Placeholder</Text>
            </View>
            <View style={styles.statsContainer}>
                <Text style={styles.statsText}>Totale Score: 0</Text>
                <Text style={styles.statsText}>Gemiddelde Score: 0</Text>
                <Text style={styles.statsText}>Beste Score: 0</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    chartContainer: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10
    },
    placeholder: {
        fontSize: 18,
        color: '#888',
    },
    statsContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    statsText: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default ScoreScreen;