function aveSpd(upTime, upSpd, downSpd) {
    // Convert uphill time from minutes to hours
    const timeInHours = upTime / 60;

    // Distance traveled uphill
    const distance = upSpd * timeInHours;

    // Time required to travel the same distance downhill
    const downTime = distance / downSpd;

    // Total distance = uphill distance + downhill distance
    const totalDistance = distance * 2;

    // Total time = uphill time + downhill time
    const totalTime = timeInHours + downTime;

    // Average speed
    return totalDistance / totalTime;
}


// Do not change the code below
const upTime = prompt("Enter upTime: ");
const upSpd = prompt("Enter upSpd: ");
const downSpd = prompt("Enter downSpd: ");

alert(aveSpd(
    Number(upTime),
    Number(upSpd),
    Number(downSpd)
));
