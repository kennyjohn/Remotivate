import database from '../firebase/firebase';

export const setSpotlight = (spotlight) => ({
    type: 'SET_SPOTLIGHT',
    spotlight
});

export const startSetSpotlight = () => {
    return (dispatch) => {
        const random = Math.floor(Math.random() * 5);
        return database.ref(`spotlights/${random}`).once('value').then((snapshot) => {
            dispatch(setSpotlight(snapshot.val()));
        });
    };
};