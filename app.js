fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.quote)
        $("#kuote").text(data.quote)
    })

const greatGenius = () => {

    fetch("https://api.kanye.rest")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.quote)
            let kuote = $("#kuote").text(data.quote)
        })
};


const collegeDropTheme = () => $('html').css("backgroundImage", "url(img/collegedropout.jpg)");

const lateRegTheme = () => $('html').css("backgroundImage", "url(img/latereg.jpg)");

const graduationTheme = () => $('html').css("backgroundImage", "url(img/graduation.png)");

const yeTripleTheme = () => $('html').css("backgroundImage", "url(img/bestalbums.webp)");