// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array, string){
    const obj = array.filter(element => element.toUpperCase() === string.toUpperCase())
    return obj;

}
function fuzzyMatch(array, string){
    const fuzz = array.filter(element => element[0] === string[0])
    return fuzz;
}
function matchName(driver, string){
    const matchName = driver.filter(element => element.name === string)
    return matchName;
}
findMatching(drivers, 'Bobby')