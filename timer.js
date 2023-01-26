
// created a digital time that refreshes every second
setInterval(startTimer, 1000);

function startTimer() {
    const date = new Date();
    let todaySecond = date.getSeconds();// get the seconds from the date object
    let todayMinute = date.getMinutes();// get the minutes from the date object
    let todayHour = date.getHours(); //gets the hour from the date object
    
    let currentTime;

    let leadingSecond = 0;
    let leadingMinute = 0;
    let leadingHour = 0;

    if (todaySecond < 10) {
        leadingSecond = "0" + todaySecond.toString();
    }
    else {
        leadingSecond = todaySecond;
    }

    if (todayMinute < 10) {
        leadingMinute = "0" + todayMinute.toString();
    }
    else {
        leadingMinute = todayMinute;
    }

    if (todayHour < 10) {
        leadingHour = "0" + todayHour.toString();
    }
    else {
        leadingHour = todayHour;
    }

    currentTime = `${leadingHour}:${leadingMinute}:${leadingSecond}`; //string literals

    document.getElementById('demo').innerHTML = currentTime;
}

//trying to change wallpaper after five seconds: seems like i need to run through the array 

//setInterval(changeWall, 5000);

 let wallPaper = ["1.jpg", "2.jpg", "3.png", "4.jpg", "5.png", "6.png", "7.jpg", "8.jpg", "9.jpg", "10.jpg"]; //array for images
 let cover = document.querySelector(".outer-cover"); // linking the html and js.
 //console.log();// works

 function changeWall() {
    let random = Math.floor(Math.random() * wallPaper.length);// works fine..........

    console.log(random);//works
    cover.style.backgroundImage = wallPaper[random]; // not working...........      
} 



/* function getRandomNumber () {
    return Math.floor(Math.random() * wallPaper.length);
} //not working............
 */

 

/* let total = 0, count = 1;
while (count <= 10) {
total += count;
count ++;
}
console.log(total);
// → 55 */