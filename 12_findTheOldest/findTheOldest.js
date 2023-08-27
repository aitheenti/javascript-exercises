const findTheOldest = function (people) {
    console.log(people)
    const personDetails = []
    const personFinalObjects = people.map(person => personDetails.push(person.name, person.yearOfDeath - person.yearOfBirth))
    console.log(personDetails)

};

// Do not edit below this line
module.exports = findTheOldest;
