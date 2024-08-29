import React from 'react';
/**
 * Interface voor een item in de leaderboard
 * 
 * Deze interface definieert de structuur van een leaderboard-item in de MathWizards app.
 * Het bevat de essentiële informatie die nodig is om een speler te identificeren en zijn score weer te geven.
 */
export interface LeaderboardItem {
  /**
   * Unieke identifier voor het leaderboard-item
   */
  id: string;

  /**
   * Naam van de speler
   */
  name: string;

  /**
   * Score van de speler
   */
  score: number;
}

/**
 * Tips en lessen:
 * 
 * 1. Het gebruik van interfaces in TypeScript helpt bij het definiëren van de structuur van objecten,
 *    wat leidt tot betere type-checking en code-completion in je IDE.
 * 
 * 2. Door de interface te exporteren, kan deze in andere delen van de applicatie worden gebruikt,
 *    wat zorgt voor consistentie in de datastructuur en type-veiligheid.
 * 
 * 3. Het toevoegen van JSDoc-commentaar bij elke property verbetert de leesbaarheid en documentatie
 *    van je code, wat vooral handig is voor teamprojecten of wanneer je na lange tijd terugkeert naar je code.
 * 
 * 4. In dit geval hebben we de id als string gedefinieerd, wat flexibiliteit biedt voor verschillende
 *    soorten ID's (bijvoorbeeld UUID's). Als je zeker weet dat je alleen numerieke ID's zult gebruiken,
 *    kun je het type veranderen naar 'number'.
 */
