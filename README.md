# MathWizards
Laten we de belangrijkste aspecten van deze innovatieve rekenspel app voor kinderen doornemen

## Adaptieve moeilijkheidsgraad:
- Het spel begint op niveau 1 met eenvoudige optelsommen.
- Naarmate de speler vordert, worden de problemen moeilijker (aftrekken, vermenigvuldigen, grotere getallen).
- Het niveau stijgt automatisch als de speler een reeks goede antwoorden geeft.
- Dynamische aanpassing van moeilijkheidsgraad op basis van individuele prestaties.
- Introductie van complexere concepten zoals breuken en decimalen op hogere niveaus.

---
## Gamification elementen:
- `Scoresysteem:` Spelers verdienen punten voor correcte antwoorden.
- `Streak-systeem:` Opeenvolgende correcte antwoorden verhogen de score-vermenigvuldiger.
- `Timer:` Spelers moeten zo veel mogelijk vragen beantwoorden binnen een tijdslimiet.
- `Visuele feedback:` Sterren worden weergegeven voor opeenvolgende correcte antwoorden.
- `Dagelijkse uitdagingen:` Speciale missies om extra beloningen te verdienen.
- `Achievements:` Ontgrendelbare badges voor verschillende prestaties.
- `Power-ups:` Tijdelijke boosters zoals extra tijd of hint-opties.

---
## Interactieve UI:
- Duidelijke weergave van het rekenprobleem.
- Meerkeuze antwoordopties die willekeurig worden gegenereerd.
- Animaties voor score-updates om de gebruikerservaring te verbeteren.
- Interactieve tutorials voor nieuwe spelers.
- Aanpasbare avatars en thema's voor personalisatie.
- Haptische feedback voor correcte en incorrecte antwoorden.

---
## Leerprogressie:
- Na het spel wordt een grafiek getoond met de scores van vorige spellen.
- Spelers kunnen hun vooruitgang over tijd zien.
- Gedetailleerde statistieken per rekenkundig concept.
- Aanbevelingen voor oefengebieden op basis van prestaties.
- Wekelijkse en maandelijkse voortgangsrapporten.

---
## Educatieve waarde:
- Oefent basisrekenvaardigheden (optellen, aftrekken, vermenigvuldigen).
- Stimuleert snel denken en hoofdrekenen.
- Past spaced repetition toe door problemen te herhalen.
- Integratie van real-world problemen en toepassingen.
- Uitleg van concepten na foute antwoorden voor dieper begrip.
- Optionele video-tutorials voor moeilijke onderwerpen.

---
## Sociale en competitieve elementen:
- Leaderboards voor vrienden en wereldwijd.
- Mogelijkheid om uitdagingen naar vrienden te sturen.
- Teamspelmodus voor samenwerkend leren.
- In-app chat voor discussie over rekenproblemen.
- Wekelijkse toernooien met speciale prijzen.


---
## Mogelijke verbeteringen
Om deze app verder te verbeteren en geschikt te maken voor productie, zouden we het volgende kunnen toevoegen:
- Een tutorial voor nieuwe spelers.
- Meer variatie in rekenopgaven, zoals deelsommen of breuken voor hogere niveaus.
- Achievements en beloningen om langetermijnbetrokkenheid te stimuleren.
- Een leaderboard om competitie tussen vrienden mogelijk te maken.
- Ouderlijk toezicht en voortgangsrapporten.
- Thema's en aanpasbare avatars om de app persoonlijker te maken.
- Geluidseffecten en achtergrondmuziek om de ervaring te verrijken.
- Offline modus voor spelen zonder internetverbinding.

---
## Om de app te testen, volg je deze stappen:

### Voor React Native:
- Zorg ervoor dat je Node.js en npm geïnstalleerd hebt.
- Installeer Expo CLI globaal: npm install -g expo-cli
- Maak een nieuwe map voor je project en navigeer ernaar in de terminal.
- Kopieer alle bovenstaande bestanden naar de juiste locaties in je projectmap.
- Voer npm install uit om alle dependencies te installeren.
- Start de app met expo start

Je kunt de app nu testen op een iOS- of Android-emulator, of op je fysieke apparaat door de Expo Go-app te installeren en de QR-code te scannen.

### Voor SwiftUI:
- Zorg ervoor dat je Xcode geïnstalleerd hebt (minimaal versie 12).
- Maak een nieuw SwiftUI-project in Xcode.
- Vervang de gegenereerde bestanden door de bovenstaande SwiftUI-bestanden.
- Voer de app uit in de iOS-simulator of op een fysiek iOS-apparaat.

---
## Testomgeving:
- `Voor React Native:` Je kunt testen op iOS (via Xcode simulator of fysiek apparaat) en Android (via Android Studio emulator of fysiek apparaat).
- `Voor SwiftUI:` Je kunt testen op iOS-apparaten en -simulators via Xcode.

---
## Ouderlijke betrokkenheid:
- Dashboard voor ouders om voortgang te volgen.
- Mogelijkheid om aangepaste uitdagingen voor kinderen in te stellen.
- Wekelijkse e-mailrapporten over de prestaties van het kind.
- Instellingen voor speeltijdlimieten en toegangscontrole.
---
## Enkele opmerkingen:
- De React Native-versie gebruikt Expo, wat het ontwikkelingsproces vereenvoudigt.
- De SwiftUI-versie is een basis implementatie en mist enkele functies van de React Native-versie (zoals de ouderlijke dashboard). Je kunt deze functies toevoegen naarmate je de app verder ontwikkelt.
- Beide versies delen dezelfde basislogica en UI-flow, maar zijn geïmplementeerd in hun respectievelijke frameworks.
- Je moet mogelijk wat aanpassingen doen aan de paden van assets (afbeeldingen, geluiden) afhankelijk van je projectstructuur.
- Voor een volledig functionele app moet je nog een backend-service implementeren voor functies zoals de leaderboard en gebruikersauthenticatie.

## Technische verbeteringen:
- Offline modus voor spelen zonder internetverbinding.
- Cloud-synchronisatie van voortgang tussen apparaten.
- Regelmatige content-updates met nieuwe problemen en uitdagingen.
- Ondersteuning voor meerdere talen en lokalisatie.
- Toegankelijkheidsopties voor spelers met speciale behoeften.

---
### opmerking
Deze React Native componenten vormen de basis voor een boeiende en educatieve rekenspel app. Het combineert leren met plezier, waardoor kinderen gemotiveerd blijven om hun rekenvaardigheden te verbeteren. Vergeet niet om de app grondig te testen op verschillende apparaten en schermformaten om een goede gebruikerservaring te garanderen. Veel succes met je Math Wizards app!

``` bash
MathWizards/
├── android/
├── ios/
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   ├── QuestionCard.js
│   │   ├── ScoreDisplay.js
│   │   └── ...
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── GameScreen.js
│   │   ├── ScoreScreen.js
│   │   ├── SettingsScreen.js
│   │   └── ...
│   ├── assets/
│   │   ├── images/
│   │   │   └── ...
│   │   ├── sounds/
│   │   │   └── ...
│   │   └── animations/
│   │       └── ...
│   ├── utils/
│   │   ├── api.js
│   │   ├── helpers.js
│   │   └── ...
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── styles/
│   │   └── globalStyles.js
│   ├── constants/
│   │   └── index.js
│   └── App.js
├── app.json
├── package.json
└── README.md
```
---
## Nieuwe Componenten en Functies

### TutorialScreen
- **Beschrijving**: Dit scherm helpt nieuwe gebruikers de app te begrijpen door een interactieve tutorial.
- **Functionaliteiten**:
  - Startknop die de gebruiker door de basisfuncties van de app leidt.
  - Eenvoudige en intuïtieve gebruikersinterface om de leercurve te minimaliseren.

### App Component
- **Beschrijving**: Het kerncomponent van de app dat de navigatie en globale staat zoals thema's en leaderboard data beheert.
- **Functionaliteiten**:
  - Beheert de navigatiestructuur van de app met behulp van React Navigation.
  - Biedt een context voor het beheren van de donkere modus.
  - Haalt leaderboard data op en beheert deze.

### LeaderboardScreen
- **Beschrijving**: Toont een leaderboard met de scores van de spelers, wat competitie en betrokkenheid stimuleert.
- **Functionaliteiten**:
  - Toont de top scores van spelers.
  - Interacteert met de backend om real-time score updates te verkrijgen.

Deze componenten dragen bij aan een rijke en interactieve gebruikerservaring, en ondersteunen de educatieve doelen van de MathWizards app.
