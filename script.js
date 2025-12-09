const retroColors = [
  { name: "Vintage Orange", hex: "#FFB347" },
  { name: "Muted Coral", hex: "#E27D60" },
  { name: "Soft Rose", hex: "#C38D9E" },
  { name: "Faded Teal", hex: "#85DCCB" },
  { name: "Retro Aqua", hex: "#41B3A3" },
  { name: "Warm Tan", hex: "#E8A87C" },
  { name: "Faded Yellow", hex: "#F8E9A1" },
  { name: "Vintage Brown", hex: "#A1775B" },
  { name: "Dusty Purple", hex: "#6C5B7B" },
  { name: "Retro Navy", hex: "#355C7D" },
  { name: "Retro Pink", hex: "#F67280" },
  { name: "Sage Green", hex: "#99B898" }
];


const heading = document.getElementById("color-name");
const changeBtn = document.querySelector("#change");
const body = document.querySelector("body");
const topBtn = document.querySelector(".top");
const click = document.getElementById("clickSound");

changeBtn.addEventListener("mousedown", change);
changeBtn.addEventListener("mouseup", resetPress);
changeBtn.addEventListener("mouseleave", resetPress);

// Touch events for mobile
changeBtn.addEventListener("touchstart", change);
changeBtn.addEventListener("touchend", resetPress);
changeBtn.addEventListener("touchcancel", resetPress);


let i = -1;

function resetPress(){
    click.play();
    topBtn.style.transform = "translate(0, 0)";

}


function change(){
    i++;
    click.play();
    topBtn.style.transform = "translate(0, 10px)"
    topBtn.style.transition = "transform 0.1s"
    if(i < retroColors.length){
    body.style.background = retroColors[i].hex;
    body.style.transition = "background 0.5s"
    heading.textContent = retroColors[i].name;
    topBtn.style.color = retroColors[i].hex;
    topBtn.style.color = "background 0.5s"

    }else{
        i = 0;
    }

   
}