function backHome() {
    setTimeout(function() {
        window.location.href = "../../GFL - Home/Home.html"
    }, 500)
}

function checkKey() {
    const login_pass = "10082007"
    Key = localStorage.getItem("key-check")
    if (Key != login_pass) {
        window.location = "../../index.html"
    }
}