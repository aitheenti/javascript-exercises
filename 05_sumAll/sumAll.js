const sumAll = (lowerRange, higherRange) => {
    if ((typeof lowerRange !== 'number' || typeof higherRange !== 'number') || higherRange < 1 || lowerRange < 1) {
        return "ERROR";
    }

    let greaterNumber = Math.max(lowerRange, higherRange);
    let smallerNumber = Math.min(lowerRange, higherRange);
    let finalSum = 0;

    for (let i = smallerNumber; i <= greaterNumber; i++) {
        finalSum += i;
    }

    return Math.abs(finalSum)
};

// Do not edit below this line
module.exports = sumAll;
