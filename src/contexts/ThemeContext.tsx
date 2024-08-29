import React, { createContext, useState, useEffect } from 'react';

/**
 * ThemeContext voor MathWizards
 * 
 * Deze context beheert het thema van de applicatie, inclusief de donkere modus.
 * Het biedt functies om het thema te wijzigen en de huidige themastatus op te vragen.
 */

// Definieer de structuur van het thema
interface Theme {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: {
    background: string;
    text: string;
    primary: string;
  };
}

// Creëer de context met een standaard waarde
export const ThemeContext = createContext<Theme>({
  isDarkMode: false,
  toggleDarkMode: () => {},
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#4A90E2',
  },
});

/**
 * ThemeProvider component
 * 
 * Dit component wraps de applicatie en biedt toegang tot het thema via de context.
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect om de voorkeur van de gebruiker voor donkere modus op te halen en in te stellen
  useEffect(() => {
    // Hier zou je de voorkeur van de gebruiker kunnen ophalen uit AsyncStorage of een andere bron
    // Voor nu gebruiken we een voorbeeld met een timeout om asynchroon gedrag te simuleren
    const timer = setTimeout(() => {
      setIsDarkMode(false); // Standaard lichte modus
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const theme: Theme = {
    isDarkMode,
    toggleDarkMode,
    colors: isDarkMode
      ? {
          background: '#121212',
          text: '#FFFFFF',
          primary: '#BB86FC',
        }
      : {
          background: '#FFFFFF',
          text: '#000000',
          primary: '#4A90E2',
        },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Les: Context API en Theming in React Native
 * 
 * Bij het implementeren van een thema systeem met de Context API is het belangrijk om:
 * 1. Een duidelijke interface te definiëren voor het thema object.
 * 2. De context te creëren met een zinvolle standaardwaarde.
 * 3. Een provider component te maken dat de themalogica beheert.
 * 4. Gebruik te maken van de useState en useEffect hooks voor staats- en effectbeheer.
 * 5. Een toggle functie aan te bieden voor het wisselen tussen thema's.
 * 6. Kleuren en andere thema-gerelateerde waarden te centraliseren in het thema object.
 * 
 * Tip: In een productiescenario zou je de gebruikersvoorkeur kunnen opslaan in AsyncStorage
 * en deze ophalen bij het initialiseren van de app.
 */
