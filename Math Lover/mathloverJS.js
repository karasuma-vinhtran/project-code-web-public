function OnClick() {
    const nameMe = document.querySelector("#inp-nameMe").value
    const nameYou = document.querySelector("#inp-nameYou").value
    var numberMath = document.querySelector("#number-math")
    var textThongDiep = document.querySelector("#text-thong-diep")
    var numberChar_nameMe = nameMe.length
    var numberChar_nameYou = nameYou.length
    if (numberChar_nameMe <= 10 || numberChar_nameYou <= 10) {
        alert("Vui lòng Nhập Đầy Đủ Họ & Tên Của Bạn Hoặc Người Ấy")
    } else if (nameMe == "Trần Đình Vinh" && nameYou == "Nguyễn Huyền Trang") {
        OpenTab()
        numberMath.innerHTML = "96%"
        textThongDiep.innerHTML = "Mong cho cuộc sống của hai bạn được chúc phúc với vô số món quà của tình yêu và sự ưu ái dành cho nhau.\nChúc hai bạn một cuộc sống đầy hạnh phúc và thành công! (>_<)_<)"
        PRL()
    } else if (nameMe == "Nguyễn Huyền Trang" && nameYou == "Trần Đình Vinh") {
        OpenTab()
        numberMath.innerHTML = "96%"
        textThongDiep.innerHTML = "Mong cho cuộc sống của hai bạn được chúc phúc với vô số món quà của tình yêu và sự ưu ái dành cho nhau.\nChúc hai bạn một cuộc sống đầy hạnh phúc và thành công! (>_<)_<)"
        PRL()
    } else {
        OpenTab()
        Inp_Lover()
        Math_Lover()
        LCRL()
        PRL()
    }
}


//Submit Name || Gửi Tên Đi



//Open Tab Math
function OpenTab() {
    setTimeout(function() {
        var div_MathLover = document.querySelector("#div-math-lover")
        var MathLover = document.querySelector("#math-lover")
        div_MathLover.style.zIndex = "10"
        div_MathLover.style.opacity = "1"
        MathLover.style.marginTop = "-50px"
    }, 300)
}

//Inp Lover
function Inp_Lover() {
    const nameMe = document.querySelector("#inp-nameMe").value
    const nameYou = document.querySelector("#inp-nameYou").value
    var numberChar_nameMe = nameMe.length
    var numberChar_nameYou = nameYou.length
    Total_numberChar = numberChar_nameMe + numberChar_nameYou
}


//Math Lover
function Math_Lover() {
    var numberMath = document.querySelector("#number-math")
    if (Total_numberChar >= 10) {
        Total_numberChar -= 10
        Math_Lover()
    } else {
        Total_numberChar *= 10
        var MathRandom = Math.floor(Math.random() * 10) + 1;
        TotalLastRandom = Total_numberChar + MathRandom
        if (TotalLastRandom == 100) {
            numberMath.innerHTML = "100%"
        } else {
            numberMath.innerHTML = TotalLastRandom + "%"
        }
    }
    console.log(Total_numberChar)
}

//Lời Chúc
function LCRL() {
    var textThongDiep = document.querySelector("#text-thong-diep")

    //Chọn Lời Chúc
    switch (Total_numberChar) {
        case 0:
            LoiChuc_List = "Tôi Biết Bạn Đang Nghĩ Gì Khi Nhìn Con Số Trên.\nNên Làm Điều Bạn Đang Nghĩ (^-^)";
            break;
        case 10:
        case 20:
        case 30:
            LoiChuc_List = "Có Thể Bạn Sẽ Không Tin Về Chỉ Số Trên, Cũng Đúng Thôi Vì Chỉ Số Này Dựa Trên Số Ký Tự Trên Tên Của Bạn.\nNhưng Nó Cũng Đúng 1 Phần Nhỏ Lắm Đấy";
            break;
        case 40:
            LoiChuc_List = "Một Con Số Có Vẻ Thể Hiện Lên 1 Tình Yêu Mập Mờ (>_<)";
            break;
        case 50:
            LoiChuc_List = "Tầm 50/50 Quá Nhỉ. Hãy Duy Trì Tình Yêu Này Tốt Hơn Nhé (^o^)";
            break;
        case 60:
        case 70:
        case 80:
            LoiChuc_List = "Một Chỉ Số Khá Cao Đấy.\n Hãy Duy Chỉ Mối Quan Hệ Thật Tốt Nhé";
            break;
        case 90:
            LoiChuc_List = "Mong cho cuộc sống của hai bạn được chúc phúc với vô số món quà của tình yêu và sự ưu ái dành cho nhau.\nChúc hai bạn một cuộc sống đầy hạnh phúc và thành công! (>_<)_<)";
            break;
        case 100:
            LoiChuc_List = "Nhìn Chỉ Số Trên Kìa.\nHai Bạn Sinh Ra Để Dành Cho Nhau Rồi";
            break;
    }

    textThongDiep.innerHTML = LoiChuc_List
}

//Picture Random
function PRL() {
    var MathLover = document.querySelector("#math-lover")
    var PRandom = Math.floor(Math.random() * 4) + 1;
    var pictureAPI = './PicMobile-PC.json'

    if (screen.width <= 500) {
        fetch(pictureAPI)
            .then(function(response) {
                return response.json();
            })
            .then(function(list) {
                console.log(PRandom)
                PRLCorrect = list["Mobile"][PRandom]
                MathLover.style.background = "url(" + PRLCorrect + ")"
                MathLover.style.backgroundSize = "cover"
            })
    } else {
        MathLover.style.background = "#11998e"
        MathLover.style.backgroundSize = "cover"
    }
}

//Close Tab Math
function CloseTab() {
    var div_MathLover = document.querySelector("#div-math-lover")
    var MathLover = document.querySelector("#math-lover")
    var iconClose = document.querySelector("#icon-close")
    iconClose.style.backgroundColor = "#757575"
    setTimeout(() => {
        iconClose.style.backgroundColor = "transparent"
        div_MathLover.style.zIndex = "0"
        div_MathLover.style.opacity = "0"
        if (screen.height <= 2000) {
            MathLover.style.marginTop = "80px"
        } else if (screen.height <= 500) {
            MathLover.style.marginTop = "150px"
        }
    }, 100)
    MathLover.style.backgroundColor = "#11998e"
}