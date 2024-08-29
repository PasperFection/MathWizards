import { useState } from 'react';

/**
 * Berekent de score op basis van de gegeven antwoorden, moeilijkheidsgraad en bestede tijd
 * 
 * Deze functie berekent de totaalscore door rekening te houden met correcte antwoorden,
 * moeilijkheidsgraad en de snelheid waarmee de vragen zijn beantwoord. Het implementeert
 * een geavanceerd scoresysteem dat spelers motiveert om accuraat en snel te antwoorden.
 * 
 * @param {boolean[]} answers - Array van booleaanse waarden die aangeven of elk antwoord correct (true) of incorrect (false) was
 * @param {number} difficulty - De moeilijkheidsgraad van de vragen (1-10)
 * @param {number} timeSpent - De tijd die de speler heeft besteed aan het beantwoorden van de vragen (in seconden)
 * @returns {number} De berekende totaalscore
 */
export const calculateScore = (answers: boolean[], difficulty: number, timeSpent: number): number => {
    // Basiscore berekening
    const correctAnswers = answers.filter(Boolean).length;
    const baseScore = correctAnswers * 10;

    // Moeilijkheidsgraad bonus
    const difficultyMultiplier = 1 + (difficulty - 1) * 0.1; // 1.0 tot 1.9
    const difficultyBonus = Math.floor(baseScore * (difficultyMultiplier - 1));

    // Tijdbonus berekening
    const averageTimePerQuestion = timeSpent / answers.length;
    const timeBonus = Math.max(0, Math.floor(100 - averageTimePerQuestion * 2));

    // Consistentiebonus voor reeksen correcte antwoorden
    let consistencyBonus = 0;
    let streak = 0;
    for (const answer of answers) {
        if (answer) {
            streak++;
            consistencyBonus += streak;
        } else {
            streak = 0;
        }
    }

    // Totaalscore berekening
    const totalScore = baseScore + difficultyBonus + timeBonus + consistencyBonus;

    return Math.min(totalScore, 1000); // Maximale score van 1000 punten
};

/**
 * Les: Geavanceerde scorecalculatie in educatieve games
 * 
 * Bij het implementeren van een geavanceerd scoresysteem is het belangrijk om:
 * 1. Meerdere factoren mee te nemen: correctheid, moeilijkheidsgraad, snelheid en consistentie.
 * 2. Een evenwichtig systeem te creëren dat zowel nauwkeurigheid als snelheid beloont.
 * 3. Bonussen te implementeren die spelers motiveren om beter te presteren.
 * 4. Een maximale score in te stellen om het systeem beheersbaar te houden.
 * 5. Het systeem flexibel te houden voor toekomstige aanpassingen en uitbreidingen.
 * 6. Duidelijke documentatie te schrijven voor andere ontwikkelaars en voor onderhoud.
 * 
 * Bij het ontwerpen van een scoresysteem voor een educatieve game is het belangrijk om:
 * 1. Rekening te houden met verschillende factoren zoals correctheid, moeilijkheidsgraad en snelheid.
 * 2. Een balans te vinden tussen uitdaging en beloning om spelers gemotiveerd te houden.
 * 3. Het systeem flexibel te maken zodat het gemakkelijk kan worden aangepast of uitgebreid.
 * 4. Duidelijke documentatie te schrijven zodat andere ontwikkelaars het systeem kunnen begrijpen en gebruiken.
 */
