import React, { useState, useEffect, createContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import { COLORS } from './constants';
import { fetchLeaderboard } from './utils/api';
import { LeaderboardItem } from './types/LeaderboardItem';

/**
 * Hoofdcomponent van de MathWizards app
 * 
 * @description Deze component dient als het startpunt van de applicatie en beheert de globale staat.
 * Het initialiseert de navigatiestructuur, beheert de donkere modus en laadt de leaderboard.
 * 
 * @tip Gebruik createContext voor betere modulariteit en om props drilling te voorkomen.
 * 
 * @lesson Het is belangrijk om imports te controleren en alleen de noodzakelijke onderdelen te importeren.
 * Dit verbetert de prestaties en vermindert de kans op fouten.
 */

const Stack = createStackNavigator();

/**
 * ThemeContext voor het beheren van de donkere modus
 * 
 * @tip Overweeg om context definities in aparte bestanden te plaatsen voor betere codeorganisatie.
 * 
 * @lesson Het gebruik van React Context is een efficiënte manier om thema-gerelateerde
 * informatie door de component tree te verspreiden zonder props drilling.
 */
const ThemeContext = createContext({ 
  isDarkMode: false, 
  toggleDarkMode: () => {} 
});

/**
 * Hoofdcomponent van de MathWizards app
 * 
 * Deze component beheert de globale staat van de app, inclusief de donkere modus en de leaderboard.
 * Het maakt gebruik van React hooks voor staatsbeheer en effecten.
 * 
 * @returns {React.FC} De App component
 */
const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([]);

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const data = await fetchLeaderboard();
        const typedData: LeaderboardItem[] = data.map((item: any) => ({
          id: item.id || String(item.score),
          name: item.name || 'Onbekend',
          score: item.score
        }));
        setLeaderboard(typedData);
      } catch (error) {
        console.error('Fout bij het laden van de leaderboard:', error);
        setLeaderboard([]);
      }
    };

    loadLeaderboard();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    isDarkMode,
    toggleDarkMode,
    colors: isDarkMode ? {
      background: COLORS.TEXT,
      text: COLORS.BACKGROUND,
      primary: COLORS.SECONDARY,
    } : {
      background: COLORS.BACKGROUND,
      text: COLORS.TEXT,
      primary: COLORS.PRIMARY,
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      <NavigationContainer>
        <View style={[styles.container, isDarkMode && styles.darkContainer]}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: theme.colors.text,
            }}
          >
            <Stack.Screen name="Home" options={{ title: 'MathWizards' }}>
              {(props) => <HomeScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Game" component={GameScreen} />
            <Stack.Screen name="Leaderboard" component={LeaderboardScreen} initialParams={{ leaderboard }} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  darkContainer: {
    backgroundColor: COLORS.TEXT,
  },
});

export default App;

/**
 * Les: App-architectuur en navigatie in React Native
 * 
 * Bij het bouwen van een React Native app is het belangrijk om:
 * 1. Een duidelijke navigatiestructuur te implementeren met React Navigation.
 * 2. Globale app-staat te beheren (zoals donkere modus) en deze door te geven aan child-componenten via Context.
 * 3. Asynchrone operaties (zoals het ophalen van leaderboard-gegevens) uit te voeren in useEffect hooks.
 * 4. Consistente stijlen te gebruiken door middel van een centraal kleurenschema en thema object.
 * 5. Flexibele componenten te maken die kunnen omgaan met verschillende modi (bijv. licht/donker).
 * 6. Foutafhandeling toe te passen bij het ophalen van externe gegevens.
 * 7. TypeScript te gebruiken voor verbeterde type-veiligheid en code-documentatie.
 */
