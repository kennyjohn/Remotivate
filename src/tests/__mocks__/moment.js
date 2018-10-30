// Can't just import moment in here
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};