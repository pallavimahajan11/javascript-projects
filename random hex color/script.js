const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const color = () => {
    const randomcolor = Math.random().toString(16).substring(2, 8);
    a = randomcolor.toUpperCase();
    document.body.style.backgroundColor = "#" + a;
    hex.innerHTML = "#" + a;

};
btn.addEventListener("click", color);
color();
console.log("hii");