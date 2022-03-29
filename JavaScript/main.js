let hed =document.querySelector(".header");
let btn =document.querySelector(".bty");



window.onscroll=function(){
    if(window.scrollY >600){
        hed.style.cssText="opacity:.5;";
        btn.style.cssText="display:block;"
    }
    else{
        hed.style.cssText="opacity:1;";
        btn.style.cssText="display:none;"
    }
}

btn.onclick=function(){
window.scrollTo(0,0)
    console.log("MMMM")
}