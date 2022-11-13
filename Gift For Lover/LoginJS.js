//Lưu ý: Thay đổi trong dấu ""
// Tên Ny
const name_ny = "Nguyễn Huyền Trang"

// Lời Muốn Nói
const gift_title = "Mừng Sinh Nhật Của Bé - 10/08"

// Mật Khẩu Muốn Đặt
const login_pass = "10082007"



//======================================================
// Chạy Ngay
window.onload = autoRun
setTimeout(function() {
    document.querySelector("#display-loading").style.opacity = "0"
    document.querySelector("#display-loading").style.zIndex = "0"
}, 3000)

function autoRun() {
    document.querySelector("#name-ny").innerHTML = name_ny
    document.querySelector("#gift-title").innerHTML = gift_title
};

//======================================================

function hrefLogo() {
    window.location.href = "./PushLogo.html"
}

function runScript(e) {
    if (e.which == 13 || e.keyCode == 13) {
        checkPass()
    }
}

function checkPass() {
    var pass_check = document.getElementById("pass-check").value
    if (pass_check == "" || pass_check == null) {
        setTimeout(function() {
            alert("Nhập Mật Khẩu Đi!")
        }, 300)
    } else if (pass_check == login_pass) {
        localStorage.setItem("key-check", login_pass)
        var pass_dung = document.querySelector("#ket_qua")
        pass_dung.innerHTML = ""
        setTimeout(function() {
            setTimeout(function() {
                window.location.href = "./GFL - Home/Home.html"
            }, 3000)
            pass_dung.innerHTML = "✔ - Mật Khẩu Chính Xác. Chờ Chút Nha Bé"
            pass_dung.style.color = '#00ff33';
        }, 500)
    } else if (pass_check == 0000) {
        var pass_dung = document.querySelector("#ket_qua")
        pass_dung.innerHTML = ""
        setTimeout(function() {
            setTimeout(function() {
                window.location.href = "./GFL - Guest/Home/HomeGuest.html"
            }, 3000)
            pass_dung.innerHTML = "✔ - Mật Khẩu Chính Xác. Đang Vào Chế Độ Khách"
            pass_dung.style.color = '#00ff33';
        }, 500)
    } else {
        var pass_sai = document.querySelector("#ket_qua")
        pass_sai.innerHTML = ""
        setTimeout(function() {
            pass_sai.innerHTML = "✘ - Mật Khẩu Sai"
            pass_sai.style.color = "#ff0000";
        }, 500)
    }
}