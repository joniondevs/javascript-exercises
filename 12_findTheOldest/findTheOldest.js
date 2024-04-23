const findTheOldest = function(people) {
    people.sort((a, b) => getAge(a.yearOfBirth, a.yearOfDeath) - getAge(b.yearOfBirth, b.yearOfDeath));
    return people[people.length-1];
};

function getAge(birthYear, passedYear)
{
    if(typeof birthYear == "undefined"){ birthYear = new Date().getFullYear(); }
    if(typeof passedYear == "undefined"){ passedYear = new Date().getFullYear(); }

    return parseInt(passedYear) - parseInt(birthYear);
}

// Do not edit below this line
module.exports = findTheOldest;
