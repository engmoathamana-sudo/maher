// Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAo6gcf4aDotf9gMxIXY78q0sJtehXC2rw",
  authDomain: "mahara-46a18.firebaseapp.com",
  projectId: "mahara-46a18",
  storageBucket: "mahara-46a18.firebasestorage.app",
  messagingSenderId: "1067913700866",
  appId: "1:1067913700866:web:ee8b65114fcb80ec8de91b",
  measurementId: "G-G8VSQ4E32G"
};


// تشغيل Firebase
firebase.initializeApp(firebaseConfig);


// خدمة تسجيل الدخول
const auth = firebase.auth();
