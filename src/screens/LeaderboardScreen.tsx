import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeaderboardScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Leaderboard</Text>
            {/* Implementatie van de leaderboard lijst zou hier komen */}
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
    }
});

export default LeaderboardScreen;
