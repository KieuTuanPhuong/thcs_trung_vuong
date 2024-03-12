import { createApp } from 'vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import App from './App.vue';
import router from './router';
import './assets/main.css';
import { faPlugin } from './plugins/fontAwesomeLibraryPlugin';

const app = createApp(App);

app.use(router);
app.use(faPlugin);

app.mount('#app');
