import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { QuestionCard } from '../components/QuestionCard';

/**
 * GameScreen component
 * 
 * Dit is het hoofdscherm voor het spel. Het toont een vraagkaart en een antwoordknop.
 * 
 * @returns {React.FC} Een functioneel React-component
 */
const GameScreen: React.FC = () => {
    // State voor de huidige vraag
    const [question, setQuestion] = useState('What is 2 + 2?');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <QuestionCard question={question} />
            <Button title="Answer" onPress={() => console.log('Answer')} />
        </View>
    );
};

export default GameScreen;
