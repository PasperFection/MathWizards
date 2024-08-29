import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface QuestionCardProps {
    question: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{question}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 18,
    }
});

