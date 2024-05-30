let username2 = document.querySelector("#username")
let password2 = document.querySelector("#password")

let loginBtn = document.querySelector("#sign_in")

let getUser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener ("click" , function(e){
    e.preventDefault()
    if (username2.value==="" || password2.value===""){
        alert("please fill data ")
    } else {
        if ( (getUser && getUser.trim() === username2.value.trim() && getPassword && getPassword === password2.value )  )
        {
            setTimeout ( () => {
                window.location = "index.html"
            } , 1500)
        } else {
            console.log("username or password is wrong ")
        }
    }
})