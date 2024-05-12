import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAlx42kVWfJxpnamPWTMQ86qywM6V4JgyE",
  authDomain: "test-bee7a.firebaseapp.com",
  databaseURL: "https://test-bee7a-default-rtdb.firebaseio.com",
  projectId: "test-bee7a",
  storageBucket: "test-bee7a.appspot.com",
  messagingSenderId: "139455313560",
  appId: "1:139455313560:web:eb67968a9ba8f398db42ed",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
