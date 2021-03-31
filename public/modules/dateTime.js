
module.exports = function todayDate() {
    let today = Date.now();

    let date = new Date(today);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let todayStr = day + "-" + month + "-" + year;
    return todayStr;
};
