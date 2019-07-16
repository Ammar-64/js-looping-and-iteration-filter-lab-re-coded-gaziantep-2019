// Code your solution in this file
function findMatching(drivers, match){
  return drivers.filter(driver => driver.toLowerCase() === match.toLowerCase())
}

function fuzzyMatch(){
  return driver.filter(driver => driver.slice(0,2).include(match))
}
