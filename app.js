//generates quote on page load/reload
fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.quote)
        $("#kuote").text(data.quote)
    })


//quote generator button
const greatGenius = () => {

    fetch("https://api.kanye.rest")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.quote)
            let kuote = $("#kuote").text(data.quote)
        })
};

//theme changers
const collegeDropTheme = () => $('html').css("backgroundImage", "url(img/collegedropout.jpg)");

const lateRegTheme = () => $('html').css("backgroundImage", "url(img/latereg.jpg)");

const graduationTheme = () => $('html').css("backgroundImage", "url(img/graduation.png)");

const yeTripleTheme = () => $('html').css("backgroundImage", "url(img/bestalbums.webp)");