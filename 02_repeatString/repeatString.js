const repeatString = (str, repeatNumOfTimes) => {
    if (repeatNumOfTimes > 0) {
        return str.repeat(repeatNumOfTimes)
    } else if (repeatNumOfTimes === 0) {
        return '';
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
