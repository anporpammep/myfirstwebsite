const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySource = myImage.getAttribute("src");
    if(mySource === "/images/snow-leopard-main.png") {
        myImage.setAttribute("src","/images/snow-leopard-side.png")
    } else {
        myImage.setAttribute("src","/images/snow-leopard-main.png")
    }
})