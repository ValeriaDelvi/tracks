import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload
        default:
            return state;
    }
};

const fetchTracks = dispatch => async() => { //lista track dell'utente
    const response = await trackerApi.get('/tracks');
    dispatch({type: 'fetch_tracks', payload: response.data})
    console.log('superato "await trackerApi.get /tracks"');

};
const createTrack = dispatch => async (name, locations) => { 
//fare request all'api
    await trackerApi.post('/tracks', {name, locations});
    console.log('superato "await trackerApi.post /tracks"');
};

export const {Context, Provider} = createDataContext(
    trackReducer,//reducer
    {fetchTracks, createTrack},//actions
    []//state iniziale
);
