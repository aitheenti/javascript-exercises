const removeFromArray = arr => {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (typeof arr[i] === typeof arr[i - 1]) {
            const poppedArr = arr.pop();
            return poppedArr;
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
