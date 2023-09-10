// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import { enableLogging } from "firebase/database";

enableLogging(true);

const firebaseConfig = {
  apiKey: "AIzaSyCTBqhzEmiHep2mN6FP0xSEVltFoTu_XO4",
  authDomain: "awesomeproject-99652.firebaseapp.com",
  databaseURL: "https://awesomeproject-99652-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "awesomeproject-99652",
  storageBucket: "awesomeproject-99652.appspot.com",
  messagingSenderId: "572145667946",
  appId: "1:572145667946:web:8edca04b300e5b9ad91f13",
  measurementId: "G-DFCNWCXDDW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);