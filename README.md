# PromptWars: AI Cooking Assistant

PromptWars is a production-ready, intelligent web application designed to revolutionize personal meal planning. Leveraging the power of Google's Gemini 2.5 Flash API, the platform provides highly personalized, context-aware cooking recommendations tailored to a user's unique constraints, including budget, health goals, and family dietary restrictions.

## 🚀 Key Features

*   **Context-Aware AI Generation**: Connects to the Gemini AI API to dynamically generate comprehensive meal plans for specific timeframes (e.g., "Tomorrow", "Next 3 Days").
*   **Family Profile Management**: Allows users to save family members with specific dietary needs (e.g., Vegan, Keto), likes, and dislikes. The AI engine automatically factors in these profiles to ensure every meal is suitable for the entire household.
*   **Intelligent Grocery & Substitution Lists**: Beyond just recipes, the app generates an itemized grocery list with estimated costs and provides smart ingredient substitutions (e.g., swapping peanut butter for almond butter due to an allergy).
*   **Budget Feasibility Analysis**: Automatically calculates the estimated cost of the meal plan against the user's defined daily budget, providing a clear pass/fail feasibility report.
*   **History Tracking**: Saves all previously generated meal plans into a cloud database. The AI reads this history to prevent repeating recent meals, ensuring a varied and exciting diet.
*   **Robust Security & Authentication**: Features secure Email/Password and Google Single Sign-On (SSO) authentication. To maximize security, the user's API key is stored locally in the browser rather than hardcoded into the application.

## 🛠️ Technology Stack

PromptWars is built with a focus on extreme efficiency, speed, and clean architecture.

*   **Frontend**: Vanilla JavaScript (ES6 Modules), HTML5, and CSS3. The application is constructed as a lightweight Single Page Application (SPA) without the overhead of heavy frameworks, ensuring near-instant load times.
*   **Backend / Database**: Google Firebase (v12.15.0).
    *   **Firebase Authentication**: Manages user identities securely.
    *   **Cloud Firestore**: A NoSQL document database used to store Family Profiles and Cooking History in real-time.
    *   **Firebase Hosting**: Serves the application globally via an edge CDN.
*   **Artificial Intelligence**: Google AI Studio (Gemini 2.5 Flash API) for natural language processing and structured JSON generation.

## 📱 Responsive Design

The user interface is designed to provide an optimal experience across all devices.
*   **Desktop**: Features a persistent left sidebar for rapid navigation.
*   **Mobile**: Transitions seamlessly to a sticky bottom navigation bar, ensuring primary actions are always within reach of the user's thumb.
*   **Theming**: Employs a premium dark mode aesthetic with high-contrast typography for maximum accessibility and readability.

## ⚙️ Setup & Deployment

The application is engineered to run seamlessly without a complex build pipeline. 

### Local Development
1. Clone the repository.
2. Open `index.html` in any modern web browser or serve it via a local development server (e.g., VS Code Live Server).
3. Log in, navigate to Settings, and input your Gemini API Key.

### Production Deployment
The application is pre-configured for Firebase Hosting. 
1. Install the Firebase CLI: `npm install -g firebase-tools`
2. Authenticate: `firebase login`
3. Deploy: `firebase deploy --only hosting`

---
*Built to deliver intelligent, scalable, and personalized culinary assistance.*
