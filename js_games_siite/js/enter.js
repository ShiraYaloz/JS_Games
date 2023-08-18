let Gname = document.getElementById("name")
let password = document.getElementById("password")
let logIn = document.getElementById("logIn")
logIn.addEventListener("click", f_input)
let newName = document.getElementById("newName")
newName.addEventListener("click", f_newName)

function f_input() {
    if (Gname.value != "" && password.value != "")
    {
        if (localStorage.getItem(password.value).value == password.value) {
            sessionStorage.setItem(password.value, Gname.value)
            window.location="games.html"
        }
        else 
            alert("טעות בהזנת הנתונים. חבר חדש אנא לחץ לפתיחת חשבון")
        }   
    else
        alert("אנא הכנס נתונים")

}
function f_newName() {
    debugger

    if (Gname.value != null && password.value != null)
    if (localStorage.getItem(Gname.value) == null && localStorage.getItem(password.value) == null) {
        localStorage.setItem(password.value,Gname.value)
        sessionStorage.setItem(password.value, Gname.value)
        window.location="home.html"
    }
    else
        alert("טעות בהזנת הנתונים. חבר חדש אנא לחץ לפתיחת חשבון")
else
    alert("אנא הכנס נתונים")
}