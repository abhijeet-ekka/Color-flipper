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

changeBtn.addEventListener("click", change);
let i = -1;

function change(){
    i++;
    let size = retroColors.length
    let random = Math.floor(Math.random() * size);
    console.log(i)
    if(i < retroColors.length){
    body.style.background = retroColors[i].hex;
    heading.textContent = retroColors[i].name;
    }else{
        i = 0;
    }
}
//  let i = 0
//     for(i; i < retroColors.name.length; i++);

console.log()