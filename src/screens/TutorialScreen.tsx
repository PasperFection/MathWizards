import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TutorialScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tutorial</Text>
            <Button title="Start Tutorial" onPress={() => {}} />
            {/* Verdere implementatie van de tutorial logica */}
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
        fontSize: 22,
        fontWeight: 'bold'
    }
});

export default TutorialScreen;
