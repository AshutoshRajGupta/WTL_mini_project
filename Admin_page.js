let Menubtns= document.querySelector("#MenuBtn");
let Navbar1= document.querySelector("header .navbar");

window.onscroll=()=>{
    Navbar1.classList.remove("active");
    MenuBtn.classList.remove("fa-times");

}

MenuBtn.onclick=()=>{
    MenuBtn.classList.toggle("fa-times");
    Navbar1.classList.toggle("active");
};

