const imagecontainerEl = document.querySelector(".image-container");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next")

let x=0
let timer=0

prevEl.addEventListener("click",()=>{
  x=x+45;
  clearTimeout(timer)
  updatecontainer();
})

nextEl.addEventListener("click",()=>{
  x=x-45;
  clearTimeout(timer);
  updatecontainer();
})

function updatecontainer(){
  imagecontainerEl.style.transform = `perspective(100px)
                                      rotateY(${x}deg)`

  timer=setTimeout(()=>{
    x=x-45;
    updatecontainer();
  },2000);                                      
}

updatecontainer();