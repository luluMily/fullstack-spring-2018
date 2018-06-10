const daysOfWeek = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const month = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];
// getRandomDay
const getRandomDay = () => {
    return daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];
};
        
// getRandomMonth
const getRandomMonth = () => {
    return month[Math.floor(Math.random() * month.length)];
}; 

module.exports = {getRandomDay, getRandomMonth};