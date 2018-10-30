const entriesReducerDefaultState = [];

export default (state = entriesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return [
                ...state,
                action.entry
            ];
        case 'REMOVE_ENTRY':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_ENTRY':
            return state.map((entry) => {
                if(entry.id === action.id) {
                    return [
                        ...state,
                        ...action.updates
                    ];
                } else {
                    return entry;
                }
            });
        case 'SET_ENTRIES':
            return action.entries;
        default:
            return state;
    }
}