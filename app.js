function createSnow() {
    const icons = ["fa-instagram", "fa-telegram-plane", "fa-facebook-f"]; // Array of available icons
    const snow = document.createElement("i");
    const randomIcon = icons[Math.floor(Math.random() * icons.length)]; // Select a random icon from the array

    snow.classList.add("fab");
    snow.classList.add(randomIcon);

    snow.style.position = "absolute"; // Adding position property
    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.animationDuration = Math.random() * 3 + 2 + "s"; // Adding "s" for seconds
    snow.style.opacity = Math.random();
    snow.style.fontSize = Math.random() * 20 + 10 + "px"; // Adding font size
    snow.style.color = "white"; // Adding color

    document.body.appendChild(snow); // Use appendChild instead of append
    setTimeout(() => {
        snow.remove();
    }, 4000);
}

setInterval(createSnow, 100);
