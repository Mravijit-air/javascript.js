const button = document.getElementById("showTimeBtn");
const demo = document.getElementById("demo");

button.onclick = function () {
    const currentTime = new Date();
    demo.innerHTML = currentTime;
};
