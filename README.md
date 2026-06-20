# PromptWars: Personalized Cooking To-Do List

## Overview
This repository contains the source code for a Smart, Dynamic Assistant built for the Hack2Skill WarmUp challenge. The solution is developed as a lightweight, production-ready Single Page Application (SPA) contained entirely within a single file (`index.html`), adhering strictly to the < 10 MB limit and single-branch rule.

## Chosen Vertical
**Challenge: A Cooking To-Do List**
We designed a context-aware smart assistant that generates highly personalized meal plans, grocery lists, substitutions, and budget feasibility reports by leveraging Google's Gemini AI and Firebase.

## Approach and Logic
- **Architecture**: A zero-dependency vanilla HTML/JS/CSS stack for maximum performance.
- **Authentication**: Secured with Firebase Authentication (Email/Password & Google SSO).
- **Database**: Uses Firebase Firestore to save Family Profiles (Dietary habits, Likes, Dislikes) and track past Cooking Histories with timestamps.
- **Context-Aware AI Generation**: Connects to the **Google AI Studio (Gemini 2.5 Flash) API**. The assistant gathers real-time form inputs (Budget, Health Goals, Target Days), pulls family profiles to check constraints, and retrieves past meals to avoid repetition. It then crafts a dynamic JSON prompt to return structured data.

## Evaluation Criteria Addressed

1. **Code Quality (High Impact)**
   - The application uses modular JavaScript functions, DRY CSS variables, and clear documentation. The entire logic is neatly structured into Initialization, State, UI, Auth, Database, API, and Rendering blocks.
2. **Problem Statement Alignment (High Impact)**
   - Successfully implements the four mandated features: Meal Plan, Grocery List, Substitutions, and Budget Feasibility.
3. **Security (Medium Impact)**
   - **No Hardcoded Secrets**: The Gemini API key is collected securely via the application UI and stored in the browser's local storage.
   - **XSS Protection**: A strict DOM `sanitize()` function ensures all database and AI outputs are escaped before injection.
4. **Efficiency (Medium Impact)**
   - Uses zero frontend UI frameworks (React/Vue), resulting in a lightning-fast initial load time. Context is strictly limited to the last 3 meals to avoid token bloat during API calls.
5. **Testing (Low Impact)**
   - Includes an automated, internal `runUnitTests()` module that executes on initialization to assert sanitization integrity.
6. **Accessibility (Low Impact)**
   - Utilizes semantic HTML structure, high-contrast dark mode colors, focus states, and scalable font sizes.

## How to Run the Solution
1. Clone this repository and open `index.html` in any modern web browser.
2. Create an account via Email or Google Sign-In.
3. Navigate to **Settings** and input your **Google AI Studio (Gemini) API Key**.
4. Add **Family Profiles** under the Family tab.
5. Go to **Plan Meals**, define your budget, goals, and target days, then click Generate!

## Assumptions Made
- The target environment supports modern ES6 modules.
- The Firebase configuration keys are intended for public client-side identification and are secured by domain restrictions in production.
- Gemini API formatting occasionally shifts; the prompt explicitly demands strict JSON without markdown formatting to ensure deterministic parsing.
