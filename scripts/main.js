const myImage = document.querySelector("img");
const noName = "I am snow leopard without a name.";

myImage.addEventListener("click", () => {
    const mySource = myImage.getAttribute("src");
    if(mySource === "images/snow-leopard-main.png") {
        myImage.setAttribute("src","images/snow-leopard-side.png")
    } else {
        myImage.setAttribute("src","images/snow-leopard-main.png")
    }
})

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter my new name.");
    if(!myName) {
        myHeading.textContent = `I am snow leopard without a name.`;
        myImage.setAttribute("src","images/snow-leopard-main.png")
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello, my name is ${myName}`;
        myImage.setAttribute("src","images/snow-leopard-side.png")
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello, my name is ${storedName}`;
    myImage.setAttribute("src","images/snow-leopard-side.png")
}

myButton.addEventListener("click", () => {
    setUserName()});
