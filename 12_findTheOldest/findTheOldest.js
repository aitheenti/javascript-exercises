function findTheOldest(peopleArray) {
    let oldestPerson = null;
    let maxAge = -1;
    const currentYear = new Date().getFullYear();
    for (const person of peopleArray) {
        const birthYear = person.yearOfBirth;
        const deathYear = person.yearOfDeath || currentYear;

        const age = deathYear - birthYear;

        if (age > maxAge) {
            maxAge = age;
            oldestLivingPerson = person;
        }
    }

    return oldestLivingPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
