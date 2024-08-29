import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Slider from '@react-native-community/slider';

/**
 * SettingsScreen component voor het beheren van app-instellingen
 * 
 * @opmerking De Slider component is verplaatst naar een aparte import omdat deze niet meer standaard wordt geëxporteerd door react-native.
 * We gebruiken nu de @react-native-community/slider package, die apart geïnstalleerd moet worden met:
 * npm install @react-native-community/slider
 * of
 * yarn add @react-native-community/slider
 * 
 * Vergeet niet om de package ook te linken met je native project als je react-native-cli gebruikt:
 * npx react-native link @react-native-community/slider
 *
 * Deze component stelt de gebruiker in staat om verschillende instellingen van de app aan te passen,
 * zoals geluid, moeilijkheidsgraad en thema.
 */
const SettingsScreen: React.FC = () => {
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(true);
  const [difficulty, setDifficulty] = useState<number>(5);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instellingen</Text>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Geluid</Text>
        <Switch
          value={isSoundEnabled}
          onValueChange={setIsSoundEnabled}
        />
      </View>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Moeilijkheidsgraad: {difficulty}</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={difficulty}
          onValueChange={setDifficulty}
        />
      </View>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Donkere modus</Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 18,
  },
  slider: {
    width: 200,
  },
});

export default SettingsScreen;
