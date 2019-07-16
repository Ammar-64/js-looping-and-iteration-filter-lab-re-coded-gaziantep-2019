// Code your solution in this file
function findMatching(drivers, match){
  return drivers.filter(driver => driver.toLowerCase() === match.toLowerCase())
}