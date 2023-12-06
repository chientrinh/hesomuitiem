import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import DashboardLayout from './components/DashboardLayout.vue'
import EmptyLayout from './components/EmptyLayout.vue'

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAyPs8OqZ9m4jvBAG6OMCf3fe7HbBE-5E",
    authDomain: "wpnotification-e69fb.firebaseapp.com",
    databaseURL: "https://wpnotification-e69fb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wpnotification-e69fb",
    storageBucket: "wpnotification-e69fb.appspot.com",
    messagingSenderId: "679617408330",
    appId: "1:679617408330:web:0492d9b687430b6fd6e5b3",
    measurementId: "G-TKJ8N1TEPP"
};


const appFirebase = initializeApp(firebaseConfig);
const firestore = getFirestore(appFirebase);

const app = createApp(App).provide('firestore', firestore)

app.component('DefaultLayout', DashboardLayout)
app.component('EmptyLayout', EmptyLayout)

app.use(router)
app.mount('#app')
