function showSignup() {
    
    document.getElementById("title").innerText = "Sign Up";

    document.getElementById("btn").innerText = "Sign Up";

    document.getElementById("name").style.display = "block";
    document.getElementById("confirm").style.display = "block";

    document.querySelector(".text").innerHTML =
        'Already have an account? <span onclick="showLogin()">Login</span>';
}

function showLogin() {

    document.getElementById("title").innerText = "Login";

    document.getElementById("btn").innerText = "Login";

    document.getElementById("name").style.display = "none";
    document.getElementById("confirm").style.display = "none";


    document.querySelector(".text").innerHTML =
        'Don\'t have an account? <span onclick="showSignup()">Sign up</span>';
}
