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

//==============================================

window.onload = function() {
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
        window.location.href = "../../index.html"
    }, 500)
}

function coderPage() {
    setTimeout(function() {
        window.location.href = "../../GFL - Coder/Coder.html"
    }, 500)
}

function music_change() {
    setTimeout(function() {
        window.location.href = "../Music/MusicChillGuest.html"
    }, 500)
}

function timeLove_change() {
    setTimeout(function() {
        window.location.href = "../../GFL - Time Love/TimeLove.html"
    }, 500)
}