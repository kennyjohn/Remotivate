import moment from 'moment';

const filtersReducerDefaultState = {
    value: null,
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                value: action.value
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
}