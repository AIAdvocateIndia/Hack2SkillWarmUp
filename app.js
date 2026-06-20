// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJO4S1p4xxFNXkEhZJh5_fqMC9KDbmR9M",
    authDomain: "hack2skillwarmup.firebaseapp.com",
    projectId: "hack2skillwarmup",
    storageBucket: "hack2skillwarmup.firebasestorage.app",
    messagingSenderId: "622478923456",
    appId: "1:622478923456:web:7448e6b5ce329f92a07f25",
    measurementId: "G-8YC7KD5PCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized successfully!");

// Chat UI Logic
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function appendMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    chatContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function handleSend() {
    const text = userInput.value.trim();
    if (!text) return;
    
    // Add user message
    appendMessage(text, 'user');
    userInput.value = '';
    
    // Simulate assistant typing response
    setTimeout(() => {
        appendMessage("I'm connected to Firebase! Let me know what specific logic or persona you'd like me to adopt.", 'system');
    }, 800);
}

sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSend();
    }
});
