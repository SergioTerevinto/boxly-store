import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAI_AQfL3X-zQR7CvSUpfgCuY3U1sRex6c",
  authDomain: "boxly-c5858.firebaseapp.com",
  projectId: "boxly-c5858",
  storageBucket: "boxly-c5858.firebasestorage.app",
  messagingSenderId: "843467774432",
  appId: "1:843467774432:web:1cd3786d29cd70f9e37385",
  measurementId: "G-N0N8JMYS4S"
};

export const app = initializeApp(firebaseConfig);

export default app;