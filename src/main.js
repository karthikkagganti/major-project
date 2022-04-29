//import { createApp } from 'D:/final/node_modules//vue'
import Vue from 'vue'
//import HomeApp from './home.vue'
//import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import './components/hello.vue'
import HelloApp from './components/HelloWorld.vue'


Vue.use(firestorePlugin)
Vue.config.productionTip = false


Vue.use(firestorePlugin)
const firebaseConfig = {
    apiKey: "AIzaSyBak37iA_oiSfC0-1mGdf0ox_Az8vlpYuE",
    authDomain: "major-project-38b7b.firebaseapp.com",
    projectId: "major-project-38b7b",
    storageBucket: "major-project-38b7b.appspot.com",
    messagingSenderId: "870506747251",
    appId: "1:870506747251:web:1e7e80663c95403ed5e106"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();

export { db };

new Vue({
    render: h=> h(HelloApp),
}).$mount('#app')
// createApp(App).mount('$app')