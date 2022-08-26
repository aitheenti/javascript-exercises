const palindromes = str => {
    console.log('BEFORE', str)


    const reversedString = str.replace(/[^\w\s]/, '').toLowerCase().split('').reverse().join('');
    if (reversedString === str) {
        return true
    } else {
        return false;
    }
};

palindromes('A car, a man, a maraca.')
// palindromes('Animal loots foliated detail of stool lamina.')
// Do not edit below this line
module.exports = palindromes;
