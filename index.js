// Code your solution here




function findMatching(drivers, name) {
    let driversNames = drivers.filter( function(matchingName) {
        return matchingName === name || matchingName === name.toLowerCase() || matchingName === name.toUpperCase
    })
    return driversNames
}

function fuzzyMatch(drivers, name) {
    let beginningLettersMatch = drivers.filter( function(firstLetters) {
        return firstLetters.slice(0, name.length) === name 
    })
    return beginningLettersMatch
}

function matchName(drivers, name) {
    let matchingNames = drivers.filter( function(driver) {
        return driver['name'] === name
    })
    return matchingNames
}