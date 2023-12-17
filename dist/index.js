let mobilebutton=document.querySelector('#mobile-button');
let mobilemenu=document.querySelector('#mobile-menu')

mobilebutton.addEventListener('click',()=>{
    mobilemenu.classList.toggle('hidden')
})