import moment from 'moment';

const filterByText = {
    value: 'text',
    startDate: moment().startOf('year'),
    endDate: moment().endOf('month')
};

const filterByImages = {
    value: 'image',
    startDate: moment(0),
    endDate: moment(0).add(1, 'days')
};

const filterByVideos = {
    value: 'video',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('year')
};

const filterByDateOnly = {
    value: null,
    startDate: moment().startOf('week'),
    endDate: moment().endOf('week')
}

export { filterByText, filterByImages, filterByVideos, filterByDateOnly };