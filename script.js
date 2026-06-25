const planets=document.querySelectorAll(".planet");
const cards=document.querySelectorAll(".card");

planets.forEach(planet=>{

planet.addEventListener("click",()=>{

const filter=planet.dataset.filter;

cards.forEach(card=>{

if(card.classList.contains(filter)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

});

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

let start=0;

let end=counter.getAttribute("data-target");

let speed=end/100;

let update=()=>{

start+=speed;

counter.innerText=Math.floor(start);

if(start<end){
requestAnimationFrame(update);
}
else{
counter.innerText=end;
}

};

update();

});

let secret="";

document.addEventListener("keydown",(e)=>{

secret+=e.key;

if(secret.includes("editkaro")){

document.body.style.background=
"linear-gradient(45deg,#ff4d5a,#00f5ff)";

alert("✨ Cinematic Mode Activated");

}

});