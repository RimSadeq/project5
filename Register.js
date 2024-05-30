let username1 = document.querySelector("#username");
let email = document.querySelector("#email");
let password1 = document.querySelector("#password");

let register_btn = document.querySelector("#sign_up");

register_btn.addEventListener ("click" , function (e){
    e.preventDefault()
    if (username1.value==="" || email.value==="" || password1.value ===""){
        alert("please fill data")
    } else {
        localStorage.setItem("username" , username1.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password1.value);  

        setTimeout ( () => {
            window.location = "login.html"
        } , 1500)
    }
})

