var iststus = document.querySelector("h5")
var add = document.querySelector("#add")

var flag = 0
btn.addEventListener("click", function () {
    if (flag == 0) {
        iststus.innerHTML = "Friend"
        iststus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag = 1
    } else {
        iststus.innerHTML = "Stranger"
        iststus.style.color = "red"
        btn.innerHTML = "add Friend"

        flag = 0

    }

})