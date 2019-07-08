function toggleDarkLight() {
    var body = document.getElementsByTagName("body")[0];
    var currentClass = body.className;
    body.className = currentClass == "dark" ? "light" : "dark";


    var block = document.getElementById("dark1");

    currentClass = block.className;
    block.className = currentClass == "dark" ? "light" : "dark";

    block = document.getElementById("dark2");

    currentClass = block.className;
    block.className = currentClass == "dark" ? "light" : "dark";
}

function startSetLight() {
    document.getElementById("modalbutton").click();
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;
    if (!isDayTime) toggleDarkLight();

    if (!isDayTime) document.getElementById("modal-text").innerHTML = "Welcome to my CV, the current theme is as dark as night. Do you prefer light? Use the footer to return the sunlight.";
    else document.getElementById("modal-text").innerHTML = "Welcome to my CV, the current theme is as bright as day. Do you prefer darkness? Use the footer to bring back the darkness .";
}
