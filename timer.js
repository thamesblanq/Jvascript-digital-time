
// created a digital time that refreshes every second
setInterval(startTimer, 1000);

function startTimer() {
    const date = new Date();
    document.getElementById('demo').innerHTML = date.toLocaleTimeString();
}

//trying to change wallpaper after five seconds: seems like i need to run through the array 

setInterval(changeWall, 5000);

function changeWall () {
    let body = document.querySelector('wall');
    const pictures = ["1.jpg", "2.jpg", "3.png", "4.jpg", "5.png", "6.png"];
    // created a for loop to loop through the picture array
    for (let i = 0; i < pictures.length; i++) {
    body.style.backgroundImage = pictures[i];// i didn't do something right-- maybe js cant read the images like this
    }
}