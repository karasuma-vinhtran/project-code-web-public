//Thay đổi nội dung trong dấu ""

//Tên Ebe
const Name_Ebe = "Nguyễn Huyền Trang"

//Link Facebook Ebe
const linkFB_Ebe = "https://www.facebook.com/profile.php?id=100070905677293"

//Năm Sinh Ebe
const DateOfBirth_Ebe = "10/08/2007"

//Địa Chỉ Ebe
const Address_Ebe = "Đông Anh, Hà Nội"

//Thời điểm bắt đầu yêu.
const FirstLove_Day = 6 //Ngày
const FirstLove_Month = 8 // Tháng
const FirstLove_Year = 2021 // Nắm

//Tên Abe
const Name_Abe = "Trần Đình Vinh"

//Link Facebook Abe
const linkFB_Abe = "https://www.facebook.com/vinh.tran.karasuma1412/"

//Năm Sinh Abe
const DateOfBirth_Abe = "01/12/2006"

//Địa Chỉ Abe
const Address_Abe = "Tp.Vinh, Nghệ An"

//Cấm Đổi
const diaChi = "Địa Chỉ: "

//=======================================

setTimeout(function() {
    document.querySelector("#display-loading").style.opacity = "0"
    document.querySelector("#display-loading").style.zIndex = "0"
}, 3000)

window.onload = function() {
    const login_pass = "10082007"
    Key = localStorage.getItem("key-check")
    if (Key != login_pass) {
        window.location = "../index.html"
    }

    document.querySelector("#Name-Ebe").innerHTML = Name_Ebe
    document.querySelector("#DateOfBirth-Ebe").innerHTML = DateOfBirth_Ebe
    document.querySelector("#Address-Ebe").innerHTML = diaChi + Address_Ebe
    document.querySelector("#Name-Abe").innerHTML = Name_Abe
    document.querySelector("#DateOfBirth-Abe").innerHTML = DateOfBirth_Abe
    document.querySelector("#Address-Abe").innerHTML = diaChi + Address_Abe
    var curDate = new Date();
    var curDay = curDate.getDate();
    var curMonth = curDate.getMonth() + 1;
    var curYear = curDate.getFullYear();
    console.log(curDate.getFullYear())
    DateNewTotal = (curYear * 365) + (curMonth * 31) + curDay
    DateLoveTotal = (FirstLove_Year * 365) + (FirstLove_Month * 31) + FirstLove_Day
    DateLove = DateNewTotal - DateLoveTotal
    if (DateLove == 365 || DateLove == 365 * 2 || DateLove == 365 * 3 || DateLove == 365 * 4 || DateLove == 365 * 5 ||
        DateLove == 365 * 6 || DateLove == 365 * 7 || DateLove == 365 * 8 || DateLove == 365 * 9 || DateLove == 365 * 10 ||
        DateLove == 365 * 11 || DateLove == 365 * 12 || DateLove == 365 * 13 || DateLove == 365 * 14 || DateLove == 365 * 15) {
        DateLove = DateLove / 365 + " Năm"
    }
    document.querySelector("#date-tL").innerHTML = DateLove
}

function Ebe_linkFB() {
    setTimeout(function() {
        window.location.assign(linkFB_Ebe)
    }, 500)
}

function Abe_linkFB() {
    setTimeout(function() {
        window.location.assign(linkFB_Abe)
    }, 500)
}