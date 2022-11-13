// setInterval(function() {
//     var text_love_check = document.querySelector("#text-push-logo").textContent
//     var text_love = document.querySelector("#text-push-logo")
//     if (text_love_check == "⁡⁠⁢⁡⁠⁢⁣⁡⁠⁢" || text_love_check == "") {
//         text_love.innerHTML = "❤"
//         text_love.style.fontSize = "55px"
//         text_love.style.color = "#ff00ee"
//     } else if (text_love_check == "❤") {
//         text_love.innerHTML = "⁡⁠⁢⁡⁠⁢⁣⁡⁠⁢"
//         text_love.style.fontSize = "36px"
//         text_love.style.color = "#ff00ee"
//     }
// }, 1111)

//Thông báo bản update mới
const tb_update = "Thông Báo\nUpdate Music\n- in the dark | Chill"
const ONOFF_Tb = "ON"

//==============================================

setTimeout(function() {
    document.querySelector("#display-loading").style.opacity = "0"
    document.querySelector("#display-loading").style.zIndex = "0"
    setTimeout(function() {
        if (ONOFF_Tb == "ON") {
            alert(tb_update)
        } else if (ONOFF_Tb = "OFF") {}
    }, 500)
}, 3000)

window.onload = function() {
    const login_pass = "10082007"
    Key = localStorage.getItem("key-check")
    if (Key != login_pass) {
        window.location = "../index.html"
    }

    var text_love = document.querySelector("#text-push-logo")
    Mot()

    function Mot() {
        text_love.innerHTML = "❤"
        text_love.style.fontSize = "45px"
        text_love.style.color = "#ff00ee"
        setTimeout(function() { Hai() }, 1000)
    }

    function Hai() {
        text_love.innerHTML = "❤"
        text_love.style.fontSize = "65px"
        text_love.style.color = "#ff00ee"
        setTimeout(function() { Mot() }, 1000)
    }
}

function backLogin() {
    setTimeout(function() {
        window.location.href = "../index.html"
    }, 500)
}

function coderPage() {
    setTimeout(function() {
        window.location.href = "../GFL - Coder/Coder.html"
    }, 500)
}

function music_change() {
    setTimeout(function() {
        window.location.href = "../GFL - Music/MusicHTML/MusicChill.html"
    }, 500)
}

function timeLove_change() {
    setTimeout(function() {
        window.location.href = "../GFL - Time Love/TimeLove.html"
    }, 500)
}