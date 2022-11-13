window.onload = () => {
    ApiSrc_NameMusic_Chill = "../JSON-NameMusic/NameMusic-Chill.json"
    ApiSrc_LinkMusic_Chill = "../JSON-LinkMusic/LinkMusic-Chill.json"

    tableData = document.querySelector("#table-data")

    getAPI("Chill", "Name")
    getAPI("Chill", "Link")
}

function getAPI(TypeAPI, TypeData) {
    if (TypeAPI == "Chill") {
        if (TypeData == "Name") {
            fetch(ApiSrc_NameMusic_Chill)
                .then((res) => res.json())
                .then((data) => {
                    localStorage.setItem("Data-Name", data)
                })
        }
        if (TypeData == "Link") {
            fetch(ApiSrc_LinkMusic_Chill)
                .then((res) => res.json())
                .then((data) => {
                    localStorage.setItem("Data-Link", data)
                })
        }
    }
}