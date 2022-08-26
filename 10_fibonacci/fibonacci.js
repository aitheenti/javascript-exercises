const fibonacci = numberArr => {

    if (typeof numberArr !== 'number') {
        parseFloat(numberArr)
    }

    for (let i = 0; i <= numberArr; i++) {
        console.log(i += (numberArr - 1) + (numberArr - 2))
        i += (i - 1) + (i - 2);
    }
};

fibonacci(3)
// Do not edit below this line
module.exports = fibonacci;
