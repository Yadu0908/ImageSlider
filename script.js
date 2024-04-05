let scrollContainer= document.querySelector(".gallery")

let backBtn= document.getElementById('backBtn')
console.log(backBtn);

let nextBtn= document.getElementById('nextBtn')

scrollContainer.addEventListener("wheel", (evt)=>{

    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY
    scrollContainer.style.scrollBehavior= "smooth"

})

nextBtn.addEventListener('click', ()=>{

    console.log("next button clicked");
    
    scrollContainer.style.scrollBehavior= "smooth"
    scrollContainer.scrollLeft += 400
})

backBtn.addEventListener('click', ()=>{
    
    console.log("previous button clicked");
    scrollContainer.scrollLeft += -400
    scrollContainer.style.scrollBehavior= "smooth"
})