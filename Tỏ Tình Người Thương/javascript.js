window.onload = () => {
    //Có Thể Chỉnh Sửa Ở Đây

    LinkFacebookCủaBạn = "https://www.facebook.com/vinh.tran.karasuma1412/"
    Giới_Tính = "Nữ"

    //Cấm Chỉnh Sửa Nếu Ko Biết Code
    if (Giới_Tính == "Nam") {
        Sex1 = "Anh"
        Sex2 = "Em"
    } else {
        Sex1 = "Em"
        Sex2 = "Anh"
    }
    CâuTrảLờiLà_AnhYêuEm = "Câu trả lời\nCũng là điều " + Sex1 + " muốn nói với " + Sex2
    CâuTrảLờiLà_EmYêuAnh = Sex1 + " cũng yêu " + Sex2 + "\nNhư câu trả lời của " + Sex2

    divLoader = document.querySelector(".div-loader")
    divQues = document.querySelector(".div-ques")
    divLoveTotal = document.querySelector(".div-love-total")
    inpSubmit = document.querySelector(".inp-submit")
    btnSubmit = document.querySelector(".btn-submit")
    Err = document.querySelector(".err")
    textLove = document.querySelector(".text-love")

    //Sau 1s Tắt Trang Loader
    setTimeout(() => {
        divLoader.style.opacity = "0"
        divQues.style.zIndex = "100"
        divQues.style.opacity = "1"
    }, 2000);
}

//Check Kết Quả
function checkQues() {
    btnSubmit.style.backgroundColor = "rgba(0, 100, 100, 1)"
    setTimeout(() => { btnSubmit.style.backgroundColor = "rgba(0, 255, 255, 1)" }, 100);
    console.log(inpSubmit.value)

    if (inpSubmit.value == "" || inpSubmit.value == null) {
        Err.innerText = "Vui lòng nhập đáp án!"
    } else if (inpSubmit.value == "anhyêuem" || inpSubmit.value == "emyêuanh" || inpSubmit.value == "anh yêu em" || inpSubmit.value == "em yêu anh") {
        if (inpSubmit.value == "anhyêuem" || inpSubmit.value == "anh yêu em") {
            Err.innerText = "Đáp Án Chính Xác!"
            showLove("AYE")
        }
        if (inpSubmit.value == "emyêuanh" || inpSubmit.value == "em yêu anh") {
            Err.innerText = "Đáp Án Chính Xác!"
            showLove("EYA")
        }
    } else {
        Err.innerText = "Đáp Án Sai!"
    }
}

function showLove(textData) {
    console.log(textData)
    setTimeout(() => {
        divLoveTotal.style.zIndex = "1000"
        divLoveTotal.style.opacity = "1"
        if (textData == "AYE") {
            textLove.innerText = CâuTrảLờiLà_AnhYêuEm
        }
        if (textData == "EYA") {
            textLove.innerText = CâuTrảLờiLà_EmYêuAnh
        }
    }, 1000);
}

function pushFb() {
    location.assign(LinkFacebookCủaBạn)
}

function cancelLove() {
    divLoveTotal.style.zIndex = "0"
    divLoveTotal.style.opacity = "0"
}