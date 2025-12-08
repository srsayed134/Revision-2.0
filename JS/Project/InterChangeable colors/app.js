const btn = document.querySelectorAll(".btn");
const body = document.body;

btn.forEach((bt) => {
    bt.addEventListener("click", () => {
        color = bt.value;
        changeBackground(color);
    })
})

function changeBackground(color){
    body.className="";
    if (color === "purple") {
        body.classList.add("purple");
    }else if(color === "blue"){
        body.classList.add("blue");
    }else if(color === "red"){
        body.classList.add("red");
    }else if(color === "green"){
        body.classList.add("green");
    }else if(color === "yellow"){
        body.classList.add("yellow")
    }else if(color === "teal"){
        body.classList.add("teal");
    }else{
        return;
    }
     
}