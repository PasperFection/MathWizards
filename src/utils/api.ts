import axios from 'axios';
import { DIFFICULTY_LEVELS, TIME_LIMITS, QUESTIONS_PER_GAME } from '../constants';

/**
 * API-functies voor MathWizards
 * 
 * Deze module bevat functies voor het ophalen van wiskundige vragen,
 * het indienen van scores en het ophalen van leaderboard-gegevens.
 */

// Basis URL voor de API
const BASE_URL = 'https://api.mathwizards.com/v1';

/**
 * Haalt wiskundige vragen op van de server
 * @param difficulty - Moeilijkheidsgraad van de vragen
 * @param timeLimit - Tijdslimiet voor de vragen
 * @returns Een array van wiskundige vragen
 */
export const fetchQuestions = async (
  difficulty: keyof typeof DIFFICULTY_LEVELS,
  timeLimit: keyof typeof TIME_LIMITS
): Promise<Question[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/questions`, {
      params: { difficulty, timeLimit, count: QUESTIONS_PER_GAME },
    });
    return response.data;
  } catch (error) {
    console.error('Fout bij het ophalen van vragen:', error);
    throw error;
  }
};

/**
 * Dient een score in bij de server
 * @param score - De behaalde score
 * @param userId - ID van de gebruiker
 */
export const submitScore = async (score: number, userId: string): Promise<void> => {
  try {
    await axios.post(`${BASE_URL}/scores`, { score, userId });
  } catch (error) {
    console.error('Fout bij het indienen van de score:', error);
    throw error;
  }
};

/**
 * Haalt de leaderboard-gegevens op van de server
 * @returns Een array van leaderboard-items
 */
export const fetchLeaderboard = async (): Promise<LeaderboardItem[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/leaderboard`);
    return response.data;
  } catch (error) {
    console.error('Fout bij het ophalen van de leaderboard:', error);
    throw error;
  }
};

// Tip: Gebruik TypeScript interfaces om de structuur van je data te definiëren
interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface LeaderboardItem {
  userId: string;
  username: string;
  score: number;
}

/**
 * Les: API-integratie in React Native
 * 
 * Bij het werken met externe API's in React Native is het belangrijk om:
 * 1. Foutafhandeling toe te passen voor netwerkfouten en onverwachte responses.
 * 2. TypeScript te gebruiken voor type-veiligheid en betere code-documentatie.
 * 3. Constanten te gebruiken voor herbruikbare waarden zoals API-endpoints.
 * 4. Asynchrone functies te gebruiken met try-catch blokken voor error handling.
 * 5. De gebruiker feedback te geven bij netwerkverzoeken (bijvoorbeeld een laad-indicator).
 */
