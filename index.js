// Code your solution in this file!
const returnFirstTwoDrivers =function(namesArray){
    return namesArray.slice(0,2)
}
const returnLastTwoDrivers=function(namesArray){
    return namesArray.slice(-2)

}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
 
function createFareMultiplier(multiplier){
    return function(fare){ 
        return fare*multiplier }
 }
 function fareDoubler(fare){
    return fare*2

 }
 function fareTripler(fare){
    return fare*3
 }
 function selectDifferentDrivers(arrayOfDrivers, innerfunction){
    return innerfunction(arrayOfDrivers)
 }
 