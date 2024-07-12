import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

//qui possiamo scrivere una funzione che verrà eseguita 
//prima di effettuare una richiesta

const instance = axios.create({
     baseURL:'https://a43a-87-0-216-222.ngrok-free.app'
});

//mettiamo l'axios in una variabile per poter entrare 
//codice sulla fiducia per ora, passiamo due funzioni
//

instance.interceptors.request.use(
     async(config) => {
          //per modificare il config object 
          //per collegarlo al token in asyncStorage
          const token = await AsyncStorage.getItem('token');
          if(token){
               config.headers.Authorization = `Bearer ${token}`;
          }
          console.log('PRIMA traker.js// return: config modificato con token');
          return config; //ritorna config modificato
         

      },//ogni volta che c'è una richiesta
     (err) => { 
          return Promise.reject(err);
     }//ogni volta che c'è un errore
);

export default instance;

/* PRIMA del token autenticazione era solo così
import axios from "axios";

export default axios.create({
     baseURL:'https://78ed-87-0-216-222.ngrok-free.app'
});*/