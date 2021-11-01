// Code your solution in this file! 
// If first customer is on 50th street and Scruber is on 48th, the return would be 8. Finding how many blocks away a customer is/



const hQ = 42 
const distanceFeet = 264

function distanceFromHqInBlocks(someValue) {
    if (someValue > hQ) {
        return someValue - hQ;
    } else if (someValue < hQ) {
        return hQ - someValue; 
    }
}

distanceFromHqInBlocks(35);


function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * distanceFeet;
}

distanceFromHqInFeet(12, 14); 

function distanceTravelledInFeet(num1, num2) {
    if (num1 > num2) {
        return (num1 - num2) * distanceFeet
    } else if (num1 < num2) {
        return (num2 - num1) * distanceFeet
    }
}




function calculatesFarePrice(num1, num2) {
    if (distanceTravelledInFeet(num1, num2) < 400) {
        return 0
    } else if (distanceTravelledInFeet(num1, num2) >= 400 && distanceTravelledInFeet(num1, num2) <= 2000){
        const distanceTravelled = distanceTravelledInFeet(num1, num2);
        return (distanceTravelled - 400) * 0.02; 
    } else if (distanceTravelledInFeet(num1, num2) >= 2000 && distanceTravelledInFeet(num1, num2) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(num1, num2) > 2500) {
        return 'cannot travel that far';
    }
}