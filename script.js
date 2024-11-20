function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user !== "") {
        alert("Welcome again, " + user + "!");
    } else {
        user = prompt("Please enter your name:", "");
        if (user !== "" && user !== null) {
            setCookie("username", user, 365);
            displayCookie();
        }
    }
}

function displayCookie() {
    const user = getCookie("username");
    const displayDiv = document.getElementById("cookieDisplay");
    if (user !== "") {
        displayDiv.textContent = "Cookie Value: " + user;
    } else {
        displayDiv.textContent = "No cookie found. Please set one.";
    }
}
