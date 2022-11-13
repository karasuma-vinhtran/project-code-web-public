function checkWeb() {
    if (screen.width <= 600) {
        alert("BÉ SỬ DỤNG MÁY TÍNH MỚI VÀO ĐƯỢC TRANG WEB NÀY NHÉ")
        window.location.href = "../../GFL - Home/Home.html"
    }
}

window.onload = function() {
    checkKey()
    checkWeb()

    //===============================


    // API_Link_Music = "https://drive.google.com/uc?export=download&id=1BeCXJlfaiLJi477RSBqE3547t5jYvEjD"
    // API_Name_Music = "https://drive.google.com/uc?export=download&id=1lL8Br0OQJOSKZK5yAzrqEjOpN3yFFYJi"

    API_Link_Music = "../JSON-LinkMusic/LinkMusic-Chill.json"
    API_Name_Music = "../JSON-NameMusic/NameMusic-Chill.json"
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');

    if (API_Link_Music == "" || API_Name_Music == "") {
        alert("API Music Bị Thiếu! Vui Lòng Liên Hệ Admin Web Để Fix Lỗi")
        console.log("API Music Bị Thiếu")
    }

    API_Name = fetch(API_Name_Music, {
            mode: 'no-cors',
            credentials: 'include',
            headers: headers
        })
        .then(response => response.json())
        .then(data1 => {
            fetch(API_Link_Music, {
                    mode: 'no-cors',
                    credentials: 'include',
                    headers: headers
                })
                .then(response => response.json())
                .then(data2 => {
                    console.log(data1)
                    console.log(data2)
                    if (data1.length != data2.length) {
                        alert("Thông Số Bài Hát Ko Hợp Lệ!\nVui Lòng Liên Hệ Admin Web Để Fix Lỗi!")
                        console.log("List Name Music != List Link Music")
                    } else {
                        console.log("List Name Music = List Link Music")
                    }
                })
            Ul_list_music = document.querySelector(".ul-list-music")
            for (let i = 0; i < data1.length; i++) {
                Ul_list_music.innerHTML += `<li class="li-list-music"><div class="div-list-music" onclick="music(${i})">${data1[i]}</div><div class="div-list-tym div-tym-${i}" onclick="musicTym(${i})"><ion-icon name="heart-circle-outline" class="icon-tym tym-${i}"></ion-icon></div></li>`
            }
            var Tym_Show_List = JSON.parse(localStorage.getItem("tym-music"))
            if (Tym_Show_List != null && Tym_Show_List != []) {
                for (let i = 0; i < Tym_Show_List.length; i++) {
                    var id_tym_show = Tym_Show_List[i];
                    var id_tym_show = id_tym_show.toString()
                    var divTym = document.querySelector(`.div-tym-${id_tym_show}`)
                    divTym.innerHTML = `<ion-icon name="heart-circle" class="icon-tym tym-${id_tym_show}"></ion-icon>`
                }
            }
        })

    //===============================

    so_bai_nhac = 0
    play_pause = "PLAY"
    song = document.querySelector("#music")
    timelineDisplayTime = document.querySelector("#timeline-displaytime")
    timelineTotal = document.querySelector("#timeline-total")

    //Button
    var btn_play_pause = document.querySelector("#btn-play-pause")
    var btn_forward = document.querySelector("#btn-forward")
    var btn_skip = document.querySelector("#btn-skip")
    var pushDisplay_Music = document.querySelector("#div-1")
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
    pushDisplay_Music.onclick = function() {
        checkWeb()
        playMusic_Img()
        playMusic_Music()
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
        StyleMusic_Nonstop()
    }
    if (kieu_music == "Nightcore") {
        StyleMusic_Nightcore()
    }
    if (kieu_music == "Anime") {
        StyleMusic_Anime()
    }
}

function StyleMusic_Chill() {}

function StyleMusic_Nonstop() {
    window.location.href = "./MusicNonstop.html"
}

function StyleMusic_Nightcore() {
    window.location.href = "./MusicNightcore.html"
}

function StyleMusic_Anime() {
    window.location.href = "./MusicAnime.html"
}

//==============================================

function music(so_bai) {
    checkWeb()
    var Music = document.querySelector("#music")
    var Control_PlayPause = document.querySelector("#btn-play-pause")

    OnOff_Music = true
    so_bai_nhac = so_bai

    playMusic_Img()
    play_pause = "PLAY"
    Music.pause()
    Control_PlayPause.innerHTML = '<ion-icon name="play"></ion-icon>'
    Control_PlayPause.style.fontSize = "20px"

    //===========================================
    setTimeout(() => {
        playMusic_Img(Name_Music, Link_Img)
        playMusic_Music(Link_Music)
    }, 100)
}

function musicTym(id_tym) {
    var Tym = document.querySelector(`.tym-${id_tym}`)
    var divTym = document.querySelector(`.div-tym-${id_tym}`)

    if (Tym.name == "heart-circle-outline") {
        divTym.innerHTML = `<ion-icon name="heart-circle" class="icon-tym tym-${id_tym}"></ion-icon>`
        var TymMusicList = localStorage.getItem("tym-music") ? JSON.parse(localStorage.getItem("tym-music")) : []
        TymMusicList.push(id_tym)
        localStorage.setItem("tym-music", JSON.stringify(TymMusicList))
    }

    if (Tym.name == "heart-circle") {
        divTym.innerHTML = `<ion-icon name="heart-circle-outline" class="icon-tym tym-${id_tym}"></ion-icon>`
        var TymMusicList = JSON.parse(localStorage.getItem("tym-music"))
        var valueToRemove = id_tym;
        var TymMusicList = TymMusicList.filter(item => item !== valueToRemove);
        localStorage.setItem("tym-music", JSON.stringify(TymMusicList))
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

function playMusic_Img(Text_Name_List, Url_Image_List) {
    fetch(API_Link_Music)
        .then(function(response) {
            return response.json()

        })
        .then(data => {
            Text_Name_List = data[so_bai_nhac]["Name_Music"]
            Url_Image_List = data[so_bai_nhac]["Link_Img"]
            Link_Music = data[so_bai_nhac]["Link_Music"]


            var div_1 = document.querySelector("#div-1")
            var div_2 = document.querySelector("#div-2")
            var textName = document.querySelector("#text-name-song")

            if (play_pause == "PLAY") {
                div_1.style.backgroundColor = "rgba(62, 55, 102, 0)"
                div_2.style.height = "100%"
                div_2.style.marginTop = "0px"
                div_2.style.opacity = "1"
                div_2.style.backgroundImage = Url_Image_List
                textName.innerHTML = Text_Name_List
                textName.style.color = "rgba(0, 255, 26, 0)"
            } else if (play_pause == "PAUSE") {
                div_1.style.backgroundColor = "rgba(62, 55, 102, 1)"
                div_2.style.height = "80%"
                div_2.style.marginTop = "100px"
                div_2.style.opacity = "0"
                div_2.style.backgroundColor = "#000000"
                textName.innerHTML = Text_Name_List
                textName.style.color = "rgba(0, 255, 26, 1)"
            }
        })


}

function playMusic_Music(Url_Music_List) {
    fetch(API_Link_Music)
        .then(function(response) {
            return response.json()

        })
        .then(data => {
            Name_Music = data[so_bai_nhac]["Name_Music"]
            Link_Img = data[so_bai_nhac]["Link_Img"]
            Url_Music_List = data[so_bai_nhac]["Link_Music"]

            const { currentTime } = song
            var Music = document.querySelector("#music")
            var Control_PlayPause = document.querySelector("#btn-play-pause")
            Control_PlayPause.style.backgroundColor = "#0084ff"
            setTimeout(function() {
                Control_PlayPause.style.backgroundColor = "rgba(255,255,255,0)"
            }, 150)

            Music.src = Url_Music_List
            if (play_pause == "PLAY") {
                play_pause = "PAUSE"
                console.log(currentTime)
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

        })
}

function playMusic_MusicCheck() {
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
    fetch(API_Link_Music)
        .then(function(response) {
            return response.json()

        })
        .then(data => {
            var btn_forward = document.querySelector("#btn-forward")
            btn_forward.style.backgroundColor = "#0084ff"
            setTimeout(function() {
                btn_forward.style.backgroundColor = "rgba(255,255,255,0)"
            }, 150)
            if (so_bai_nhac == 0) {
                music(data.length - 1)
            } else {
                music(so_bai_nhac - 1)
            }
        })
    for_skip = true
}

function skipMusic() {
    checkWeb()
    fetch(API_Link_Music)
        .then(function(response) {
            return response.json()

        })
        .then(data => {
            var btn_skip = document.querySelector("#btn-skip")
            btn_skip.style.backgroundColor = "#0084ff"
            setTimeout(function() {
                btn_skip.style.backgroundColor = "rgba(255,255,255,0)"
            }, 150)
            if (so_bai_nhac == data.length - 1) {
                music(0)
            } else {
                music(so_bai_nhac + 1)
            }
        })
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
    fetch(API_Link_Music)
        .then(function(response) {
            return response.json()
        })
        .then(data => {
            if (ON_OFF_Refresh == "ON" && ON_OFF_Random == "ON") {
                music(so_bai_nhac)
            } else if (ON_OFF_Refresh == "ON" && ON_OFF_Random == "OFF") {
                music(so_bai_nhac)
            } else if (ON_OFF_Refresh == "OFF" && ON_OFF_Random == "ON") {
                music(Math.floor(Math.random() * data.length))
            } else {
                skipMusic()
            }
        })
}