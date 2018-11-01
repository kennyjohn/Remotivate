// SET_TEXT_FILTER
export const setFilter = (value = null) => ({
    type: 'SET_FILTER',
    value
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
