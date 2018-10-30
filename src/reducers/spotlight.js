const spotlightDefault = {
    name: 'Sorry, please refresh the page!',
    description: '',
    src: 'https://memegenerator.net/img/instances/78036647/sad-shiba-sorry-shiba.jpg'
};

export default (state = spotlightDefault, action) => {
    switch (action.type) {
        case 'SET_SPOTLIGHT':
            return action.spotlight || spotlightDefault;
        default:
            return state;
    }
}