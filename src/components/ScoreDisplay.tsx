import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ScoreDisplayProps {
  score: number;
}

/**
 * ScoreDisplay component voor het weergeven van de huidige score
 * 
 * Deze component toont de huidige score van de speler in een aantrekkelijk formaat.
 * Het gebruikt een eenvoudig maar effectief ontwerp met een cirkel en grote tekst.
 * 
 * @param {number} score - De huidige score van de speler
 */
const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreCircle}>
        <Text style={styles.scoreText}>{score}</Text>
      </View>
      <Text style={styles.label}>Huidige Score</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  scoreCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  label: {
    fontSize: 18,
    color: '#333333',
  },
});

export default ScoreDisplay;
