// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    return Math.abs(x-42)
    
}

function distanceFromHqInFeet(x) {
    distanceFromHqInBlocks(x);
    return Math.abs((x-42)*264)
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination-start)*264)
}

function calculatesFarePrice(start, destination) {
    let y = distanceTravelledInFeet(start, destination)
    if (y <=400) {
        return 0
    } 
        else if (y >= 400 && y<= 2000) {
            return parseFloat(((y*0.02)-8).toFixed(2))
    }   else if (y >=2000 && y<=2500) {
            return 25
    }
        else {
            return 'cannot travel that far'
    }
}