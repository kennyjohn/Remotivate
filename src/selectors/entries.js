import moment from 'moment';

export default (entries, { value, sortByDate, startDate, endDate }) => {
    return entries.filter((entry) => {
        const createdAtMoment = moment(entry.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textFilterMatch = entry.text ? true : false;
        const videoFilterMatch = entry.video ? true : false;
        const imageFilterMatch = entry.image ? true : false;
        if(value === "text") {
            return startDateMatch && endDateMatch && textFilterMatch;
        } else if (value === "video") {
            return startDateMatch && endDateMatch && videoFilterMatch;
        } else if (value === "image") {
            return startDateMatch && endDateMatch && imageFilterMatch;
        } else {
            return startDateMatch && endDateMatch;
        }
    }).sort((a, b) => {
      if (sortByDate) {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
    });
};
  