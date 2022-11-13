setTimeout(function() {
    document.querySelector("#display-loading").style.opacity = "0"
    document.querySelector("#display-loading").style.zIndex = "0"
}, 5000)

function backHome() {
    setTimeout(function() {
        window.location.href = "../GFL - Home/Home.html"
    }, 500)
}

function FbCoder() {
    var ques_chuyenhuonh = confirm("Bạn Muốn Đến Facebook Của Tôi Ư?")
    if (ques_chuyenhuonh) {
        setTimeout(function() {
            window.location.assign("https://www.facebook.com/vinh.tran.karasuma1412/")
        }, 500)
    } else {}
}

function DiscordCoder() {
    var ques_chuyenhuonh = confirm("Bạn Muốn Đến Discord Của Tôi Ư?")
    if (ques_chuyenhuonh) {
        setTimeout(function() {
            alert("Hãy Kết Bạn Với Tôi Qua - Karasuma_Chang#4793")
        }, 500)
    } else {}
}

function GmailCoder() {
    var ques_chuyenhuonh = confirm("Bạn Muốn Đến Gmail Của Tôi Ư?")
    if (ques_chuyenhuonh) {
        setTimeout(function() {
            window.location.assign("mailto:vinhkaito1454@gmail.com")
        }, 500)
    } else {}
}

function VTMusic() {
    var ques_chuyenhuonh = confirm("Bạn Muốn Đến kênh YT về nhạc tên: VTMsuic Studio Của Tôi Ư?")
    if (ques_chuyenhuonh) {
        setTimeout(function() {
            window.location.assign("https://www.youtube.com/channel/UC9AKy52y07DUvyARLUN3hSg")
        }, 500)
    } else {}
}