function difference(start, end) {
    // Get Start and End inputs from form in HH:MM format
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;

    // Removing : from timestamp values
    start = start.split(":");
    end = end.split(":");
    
    // Forms a new Date() with the appropriate values from start HH:MM and end HH:MM to calculate milliseconds
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);

    // Finding the difference between start and end in milliseconds
    var difference = endDate.getTime() - startDate.getTime();
    
    // Converting milliseconds to minutes to hours
    var hours = Math.floor(difference / 1000 / 60 / 60);

    difference -= hours * 1000 * 60 * 60;
    
    // Converting milliseconds to minutes
    var minutes = Math.floor(difference / 1000 / 60);
    
    // Returning difference value in HH:MM format from the conversions above
    return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
}

function joeMinute(start, end) {
    // Get Start and End inputs from form in HH:MM format
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;

    // Removing : from timestamp values
    start = start.split(":");
    end = end.split(":");
    
    // Forms a new Date() with the appropriate values from start HH:MM and end HH:MM to calculate milliseconds
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);

    // Finding the difference between start and end in milliseconds
    var difference = endDate.getTime() - startDate.getTime();
    
    // Converting milliseconds to minutes
    var joeMinute = Math.floor(difference / 1000 / 60);
    
    // Returning converted minutes from difference
    return joeMinute;
}

// Form submit listener for submitting timestamps
document.getElementById('jMinutes').addEventListener('submit', function(evt){
    evt.preventDefault();

    // Submitted HH:MM difference for Joe Minute
    document.getElementById("difference").value = difference(start, end);
    document.getElementById("joeMinute").value = joeMinute(start,end);
    
    // Array of recorded Joe Minutes
    let averageJoeMinutes = [27, 38, 14, 45, 23, 31];
    
    // Adds newly submitted Joe Minute to averageJoeMinutes array
    averageJoeMinutes.push(joeMinute(start,end));

    // Finds average from joeMinutes array
    let sum = averageJoeMinutes.reduce((previous, current) => current += previous);
    let avg = sum / averageJoeMinutes.length;

    // Documents average with a fixed tenth of a decimal integer
    document.getElementById("average").value = avg.toFixed(2);
});