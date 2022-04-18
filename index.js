// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers, string) {
    const lowerCaseFunction = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
    return lowerCaseFunction;
}

function fuzzyMatch (drivers, string) {
    const nameFunction = drivers.filter(driver => driver[0] === string[0]);
    return nameFunction;
}

function matchName (array, string) {
    const objectNameFunction = array.filter(driver => driver.name === string);
    return objectNameFunction;
}