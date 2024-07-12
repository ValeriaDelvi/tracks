import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            console.log(`entrato nel reducer:  ${action.type}`)
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        case 'signout':
            console.log(`entrato nel reducer:  ${action.type}`)
            return { token: null, errorMessage: '' }
        default:
            return state;
    }
};

//cosa cambia il mio state?
// signup, signin, sign out e dopo clear error message sennò si trascina tra le pagine

//facciamo le funzioni associate per cambiare ogni volta stato

//ogni volta che facciamo una funzione di Actions, sarà chiamata con dispatch
//che ritorna una funzione

//QUICK EXAMPLE ARROW FUNCTION
const add = (a, b) => {
    return a + b;
}
//con codice alleggerito, essendo sulla stessa linea non c'è bisogno di graffe e returm
const add2 = (a, b) => a + b;
//questo perchè useremo la stessa logica per le altre funzioni signup, ecc

//login automatico stessi dati signup
const tryLocalLogin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signup', payload: token });
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
};


const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' }) //no payload
};

const signup = dispatch => async ({ email, password }) => {
    //api request per registrarsi con email e pass
    // se siamo entrati cambiare lo stato in : autenticato
    //se non siamo entrati: messaggio Errore da qualche parte
    try {
        console.log(`prima di response nel signup`);
        const response = await trackerApi.post('/signup', { email, password });
        //console.log(response.data);
        console.log(`dopo response nel signup`);
        await AsyncStorage.setItem('token', response.data.token);
        //await AsyncStorage.getItem('token'); l'ha tolto ma non ho capito
        dispatch({ type: 'signup', payload: response.data.token });

        //navigate to main flow
        navigate('TrackList');
    } catch (error) {
        //console.log(error.message);
        //dispatc a new Action
        dispatch({ type: 'add_error', payload: 'Qualcosa è andato storto con il Sign Up' })
    }
};

const signin = (dispatch) => async ({ email, password }) => {
    // provare a fare login
    //se va bene cambiare lo stato
    //se non va bene, messaggio di errore
    try {
        console.log(`prima di response nel signin`);
        const response = await trackerApi.post('/signin', { email, password });
        console.log(`dopo response nel signin`);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token });
        navigate('TrackList');

    } catch (error) {
        dispatch({
            type: 'add_error',
            payload: 'Qualcosa è andato storto con il Login :('
        });
    }

}


const signout = (dispatch) => async () => {
    //come disconnettersi
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout, clearErrorMessage, tryLocalLogin },
    //{ isSignedIn: false, errorMessage:'' }
    { token: null, errorMessage: '' }//no token not login equivale al isSigned
);