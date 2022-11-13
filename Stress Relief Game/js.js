window.onload = () => {
    numberPoint = null

    //Get Page
    displayMenu = document.querySelector(".div-display-menu")
    displayStart = document.querySelector(".div-display-start")

    //Get Element Page Menu
    Btn_playNew = document.querySelector("#play-new")
    Btn_playContinue = document.querySelector("#play-continue")
    Fb_userCoder = document.querySelector("#fb-user-coder")

    //Get Element Page Start
    div_headGame = document.querySelector(".head-game")
    div_displayGame = document.querySelector(".display-game")
    emoji_1 = document.querySelector(".emoji-1")
    emoji_2 = document.querySelector(".emoji-2")
    divBack = document.querySelector(".div-back")
    divReset = document.querySelector(".div-reset")
    iconBack = document.querySelector(".icon-back")
    iconReset = document.querySelector(".icon-reset")

    Btn_playNew.onclick = () => {
        numberPoint = 0
        localStorage.setItem("numberPoint", 0)
        convertedPage("displayStart")
    }
    Btn_playContinue.onclick = () => {
        if (localStorage.getItem("numberPoint") != null && localStorage.getItem("numberPoint") != 0) {
            numberPoint = localStorage.getItem("numberPoint")
            convertedPage("displayStart")
        } else {
            setTimeout(() => {
                alert("Bạn Chưa Có Điểm Trước Đó!")
            }, 300);
        }
    }
    Fb_userCoder.onclick = () => { window.location = "https://www.facebook.com/vinh.tran.karasuma1412" }
    emoji_1.onclick = () => { Random_Move(1) }
    emoji_2.onclick = () => { Random_Move(2) }
    divBack.onclick = () => {
        moveBack()
        setTimeout(() => {
            convertedPage("displayMenu")
        }, 500);
    }
    divReset.onclick = () => {
        rotateReset()
        var Ele_numberPoint = document.querySelector(".number-point")

        numberPoint = 0
        localStorage.setItem("numberPoint", numberPoint)
        showPoint = localStorage.getItem("numberPoint")
        Ele_numberPoint.innerHTML = showPoint
    }
}

function convertedPage(Page) {
    if (Page == "displayStart") {
        displayMenu.style.opacity = "0"
        displayStart.style.opacity = "1"
        displayStart.style.zIndex = "10"
        document.querySelector(".number-point").innerHTML = numberPoint
    }

    if (Page == "displayMenu") {
        displayStart.style.zIndex = "0"
        displayStart.style.opacity = "0"
        displayMenu.style.opacity = "1"
        localStorage.setItem("numberPoint", numberPoint)
    }
}

function TotalPoint() {
    var Ele_numberPoint = document.querySelector(".number-point")

    numberPoint = Number(numberPoint)
    numberPoint += 1
    localStorage.setItem("numberPoint", numberPoint)
    showPoint = localStorage.getItem("numberPoint")
    Ele_numberPoint.innerHTML = showPoint
}

function Random_Move(Number_emoji) {
    TotalPoint()
    var emoji_1 = document.querySelector(".emoji-1")
    var emoji_2 = document.querySelector(".emoji-2")

    Random_Top = Math.floor(Math.random() * (div_displayGame.offsetHeight - 30)) + 30
    Random_Left = Math.floor(Math.random() * (div_displayGame.offsetWidth - 30)) + 30
    Random_Top = Random_Top.toString()
    Random_Left = Random_Left.toString()

    if (Number_emoji == 1) {
        emoji_1.style.top = Random_Top + "px"
        emoji_1.style.left = Random_Left + "px"
    }
    if (Number_emoji == 2) {
        emoji_2.style.top = Random_Top + "px"
        emoji_2.style.left = Random_Left + "px"
    }
}

function moveBack() {
    iconBack.style.marginLeft = "-100px"
    setTimeout(() => {
        iconBack.style.marginLeft = "0px"
    }, 1000)
}

function rotateReset() {
    iconReset.style.transform = "rotate(360deg)"
    setTimeout(() => {
        iconReset.style.transform = "rotate(0deg)"
    }, 1000)
}