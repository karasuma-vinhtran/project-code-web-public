function checkWeb() {
    if (screen.width <= 600) {
        alert("HÃY SỬ DỤNG MÁY TÍNH MỚI VÀO ĐƯỢC TRANG WEB NÀY NHÉ")
        window.location.href = "../../GFL - Home/Home.html"
    }
}

checkWeb()

window.onload = function() {
    alert("Bạn Bị Hạn Chế Nghe Tối Đa 1 Số Bài Hát Trong Danh Sách Hạn Chế Của Tôi")
    Max_so_bai_nhac = 3

    //===============================

    so_bai_nhac = 0
    play_pause = "PLAY"
    Text_Name_List = "Hai Mươi Hai(Lofi Ver)"
    Url_Image_List = "url(https://thumbs.gfycat.com/AcceptableGreedyDutchsmoushond-size_restricted.gif)"
    Url_Music_List = "https://drive.google.com/uc?export=download&id=1ohhSI20i9czrt-bVdV508dPbOg1E1ZYW"
    song = document.querySelector("#music")
    timelineDisplayTime = document.querySelector("#timeline-displaytime")
    timelineTotal = document.querySelector("#timeline-total")
    var btn_play_pause = document.querySelector("#btn-play-pause")
    var btn_forward = document.querySelector("#btn-forward")
    var btn_skip = document.querySelector("#btn-skip")
    btn_play_pause.onclick = function() {
        checkWeb()
        playMusic_Img()
        playMusic_Music()
    }
    btn_forward.onclick = function() {
        checkWeb()
        forwardMusic()
    }
    btn_skip.onclick = function() {
        checkWeb()
        skipMusic()
    }
    var textName = document.querySelector("#text-name-song")
    textName.innerHTML = "Hai Mươi Hai(Lofi Ver)"
    textName.style.color = "rgba(0, 255, 26, 1)"
}

//================== Chuyển Style Music =========================

function kieuMusic() {
    var kieu_music = document.querySelector("#kieu-music").value
    if (kieu_music == "Chill") {
        StyleMusic_Chill()
    }
    if (kieu_music == "Nonstop") {
        alert("Bạn Bị Hạn Chế Chức Năng Này")
    }
    if (kieu_music == "Nightcore") {
        alert("Bạn Bị Hạn Chế Chức Năng Này")
    }
    if (kieu_music == "Anime") {
        alert("Bạn Bị Hạn Chế Chức Năng Này")
    }
}

//==============================================

function music(so_bai) {
    checkWeb()
    if (so_bai == 0) {
        Text_Name_List = "Hai Mươi Hai(Lofi Ver)"
        Url_Image_List = "url(https://thumbs.gfycat.com/AcceptableGreedyDutchsmoushond-size_restricted.gif)"
        Url_Music_List = "https://drive.google.com/uc?export=download&id=1ohhSI20i9czrt-bVdV508dPbOg1E1ZYW"
        so_bai_nhac = so_bai
        chuyenBaiNhac()
    } else if (so_bai == 1) {
        Text_Name_List = "Em Là Nhất(Lofi Ver)"
        Url_Image_List = "url(https://i.pinimg.com/originals/bc/6b/bd/bc6bbd1da2b0983338e537960ad57a39.gif)"
        Url_Music_List = "https://drive.google.com/uc?export=download&id=1nvYEbv3i9bPkHRGhdcU8JT1rr_yMZsO0"
        so_bai_nhac = so_bai
        chuyenBaiNhac()
    } else if (so_bai == 2) {
        Text_Name_List = "Lạc Vào Trong Mơ(Lofi Ver)"
        Url_Image_List = "url(https://i.pinimg.com/originals/34/16/fc/3416fc4113b69a0bf1cc75a772c4b5c4.gif)"
        Url_Music_List = "https://drive.google.com/uc?export=download&id=18Qy01cwWe4kysEbXdOWxAPdhoIHHBBC1"
        so_bai_nhac = so_bai
        chuyenBaiNhac()
    } else if (so_bai >= 3) {
        alert("Bạn Bị Hạn Chế Bài Hát Này Này")
    }

    function chuyenBaiNhac() {
        //===========================================
        var Music = document.querySelector("#music")
        var Control_PlayPause = document.querySelector("#btn-play-pause")
        var div_1 = document.querySelector("#div-1")
        var div_2 = document.querySelector("#div-2")

        playMusic_Img()
        Music.pause()
        play_pause = "PLAY"
        Control_PlayPause.innerHTML = '<ion-icon name="play"></ion-icon>'
        Control_PlayPause.style.fontSize = "20px"
        setTimeout(function() {
            playMusic_Img()
            if (div_2.clientHeight == 368) {
                playMusic_Music()
            } else if (div_2.clientHeight == 460) {
                div_1.style.backgroundColor = "rgba(62, 55, 102, 1)"
                div_2.style.height = "80%"
                div_2.style.marginTop = "100px"
                div_2.style.opacity = "0"
                div_2.style.backgroundColor = "#000000"
            }
        }, 500)
    }
}

//================== Display Time Line ======================

function handleChangeBar() {
    var rangeBar = document.querySelector("#display-scroll")
    song.currentTime = rangeBar.value
}

function displayTime() {
    var rangeBar = document.querySelector("#display-scroll")
    const { duration, currentTime } = song
    rangeBar.max = duration
    rangeBar.value = song.currentTime
    timelineDisplayTime.innerHTML = formatTime(currentTime)
    if (!duration) {
        timelineTotal.innerHTML = "00:00"
    } else {
        timelineTotal.innerHTML = formatTime(duration)
    }
}
setInterval(function() { displayTime() }, 500)

function formatTime(number) {
    const minutes = Math.floor(number / 60)
    const seconds = Math.floor(number - minutes * 60)
    if (minutes >= 10 && seconds >= 10) {
        return minutes + ":" + seconds;
    } else if (minutes <= 9 && seconds <= 9) {
        return "0" + minutes + ":" + "0" + seconds;
    } else if (minutes >= 10 && seconds <= 9) {
        return minutes + ":" + "0" + seconds;
    } else if (minutes <= 9 && seconds >= 10) {
        return "0" + minutes + ":" + seconds;
    }
}

//================== Play Music ======================

function playMusic_Img() {
    var div_1 = document.querySelector("#div-1")
    var div_2 = document.querySelector("#div-2")
    var textName = document.querySelector("#text-name-song")
    if (div_2.clientHeight == 368 || div_2.clientHeight == 200) {
        div_1.style.backgroundColor = "rgba(62, 55, 102, 0)"
        div_2.style.height = "100%"
        div_2.style.marginTop = "0px"
        div_2.style.opacity = "1"
        div_2.style.backgroundImage = Url_Image_List
        textName.innerHTML = Text_Name_List
        textName.style.color = "rgba(0, 255, 26, 0)"
    } else if (div_2.clientHeight == 460 || div_2.clientHeight == 250) {
        div_1.style.backgroundColor = "rgba(62, 55, 102, 1)"
        div_2.style.height = "80%"
        div_2.style.marginTop = "100px"
        div_2.style.opacity = "0"
        div_2.style.backgroundColor = "#000000"
        textName.innerHTML = Text_Name_List
        textName.style.color = "rgba(0, 255, 26, 1)"
    }
}

function playMusic_Music() {
    var Music = document.querySelector("#music")
    var Control_PlayPause = document.querySelector("#btn-play-pause")
    Control_PlayPause.style.backgroundColor = "#0084ff"
    setTimeout(function() {
        Control_PlayPause.style.backgroundColor = "rgba(255,255,255,0)"
    }, 150)
    if (play_pause == "PLAY") {
        play_pause = "PAUSE"
        Music.src = Url_Music_List
        Music.play()
        Control_PlayPause.innerHTML = '<ion-icon name="pause"></ion-icon>'
        Control_PlayPause.style.fontSize = "20px"
        displayTime()
    } else if (play_pause == "PAUSE") {
        play_pause = "PLAY"
        setTimeout(function() {
            Music.pause()
        }, 200)
        Control_PlayPause.innerHTML = '<ion-icon name="play"></ion-icon>'
        Control_PlayPause.style.fontSize = "20px"
        displayTime()
    }
}

//=============== Forward And Back Music ==========================

function forwardMusic() {
    checkWeb()
    var btn_forward = document.querySelector("#btn-forward")
    btn_forward.style.backgroundColor = "#0084ff"
    setTimeout(function() {
        btn_forward.style.backgroundColor = "rgba(255,255,255,0)"
    }, 150)
    if (so_bai_nhac == 0) {
        music(Max_so_bai_nhac - 1)
    } else {
        music(so_bai_nhac - 1)
    }
}

function skipMusic() {
    checkWeb()
    var btn_skip = document.querySelector("#btn-skip")
    btn_skip.style.backgroundColor = "#0084ff"
    setTimeout(function() {
        btn_skip.style.backgroundColor = "rgba(255,255,255,0)"
    }, 150)
    if (so_bai_nhac == Max_so_bai_nhac - 1) {
        music(0)
    } else {
        music(so_bai_nhac + 1)
    }
}

//=============== Skip 5s And Back 5s Music ===========================

function Back5s_Music() {
    checkWeb()
    var time_nhay = document.querySelector("#time-chuyen").value
    var btn_back5s = document.querySelector("#back5s-music")
    time_nhay = Number(time_nhay)
    if (song.currentTime <= 0) {} else {
        song.currentTime = song.currentTime - time_nhay
    }
    btn_back5s.style.backgroundColor = "#0084ff"
    setTimeout(function() {
        btn_back5s.style.backgroundColor = "rgba(255,255,255,0)"
    }, 150)
}

function Skip5s_Music() {
    checkWeb()
    var time_nhay = document.querySelector("#time-chuyen").value
    var btn_skip5s = document.querySelector("#skip5s-music")
    time_nhay = Number(time_nhay)
    if (song.currentTime >= song.duration) {} else {
        song.currentTime = song.currentTime + time_nhay
    }
    btn_skip5s.style.backgroundColor = "#0084ff"
    setTimeout(function() {
        btn_skip5s.style.backgroundColor = "rgba(255,255,255,0)"
    }, 150)
}

//=============== Refresh And Random Music ===========================

var thoigian_ngat = 1000
var ON_OFF_Refresh = "OFF"
var ON_OFF_Random = "OFF"

function Refresh_Music() {
    checkWeb()
    var refreshMusic = document.querySelector("#refresh-music")
    if (ON_OFF_Refresh == "OFF") {
        refreshMusic.style.backgroundColor = "#0084ff"
        ON_OFF_Refresh = "ON"
    } else {
        refreshMusic.style.backgroundColor = "rgba(255, 255, 255, 0)"
        ON_OFF_Refresh = "OFF"
    }
}

function Random_Music() {
    checkWeb()
    var randomMusic = document.querySelector("#random-music")
    if (ON_OFF_Random == "OFF") {
        randomMusic.style.backgroundColor = "#0084ff"
        ON_OFF_Random = "ON"
    } else {
        randomMusic.style.backgroundColor = "rgba(255,255,255,0)"
        ON_OFF_Random = "OFF"
    }
}

setInterval(function() {
    if (song.currentTime >= song.duration) {
        endMusic()
        thoigian_ngat = null
    }
}, thoigian_ngat)

function endMusic() {
    if (ON_OFF_Refresh == "ON" && ON_OFF_Random == "ON") {
        music(so_bai_nhac)
    } else if (ON_OFF_Refresh == "ON" && ON_OFF_Random == "OFF") {
        music(so_bai_nhac)
    } else if (ON_OFF_Refresh == "OFF" && ON_OFF_Random == "ON") {
        console.log(Math.floor(Math.random() * Max_so_bai_nhac))
        music(Math.floor(Math.random() * Max_so_bai_nhac))
    } else {
        skipMusic()
    }
}