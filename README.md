# RPG-AI Project: MVP (Minimum Viable Product)

## 🎯 Goal

To create an interactive RPG where an artificial intelligence acts as the Game Master. The player will interact with the AI through a chat-based interface.

## ⚙️ Technologies

* **Frontend**: Flutter
* **Backend**: Feathers.js (Node.js)
* **AI**: CrewAI

## 📁 Repository Structure

* `backend/`: Contains the Feathers.js server. It is responsible for managing player data and acting as a bridge to the AI.
* `frontend/`: Contains the Flutter application. This is the user interface (UI) of the game.
* `game-master-ai/`: Contains the AI logic using CrewAI. This is our "Game Master."

## ✅ MVP Features

### Frontend (Flutter)

* [ ] A simple **start screen** with fields for the character's **Name** and **Class**.
* [ ] A basic **chat interface** for player interaction with the AI.
* [ ] Real-time display of messages from the AI and actions from the player.

### Backend (Feathers.js)

* [ ] A **user authentication** service.
* [ ] A **character service** to store basic data (name, class, etc.).
* [ ] An API route to receive player actions and send them to the AI.
* [ ] An API route to receive the AI's response and send it back to the frontend.

### Game Master (CrewAI)

* [ ] A primary **AI agent** that acts as the RPG Game Master.
* [ ] The ability to **generate the initial scenario** based on the character's chosen class.
* [ ] The ability to **respond narratively** to the player's actions.

## 🚀 Next Steps (Action Plan)

1.  **Repository Setup:** Clone the repository and create the `backend/`, `frontend/`, and `game-master-ai/` folders.
2.  **Backend Development:** Set up the Feathers.js project with initial services. Test communication between the frontend and backend.
3.  **AI Development:** Configure CrewAI and the "Game Master" agent. Test its ability to generate narratives.
4.  **Integration:** Connect Feathers.js with CrewAI so player actions are processed by the AI.
5.  **Frontend Development:** Build the Flutter screens to interact with the backend.

---