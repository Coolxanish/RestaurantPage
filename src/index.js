import './style.css';
import restaurant from './restaurant.jpeg'
import home from './home.js'
import { menu } from './menu.js'
import { contact } from './contact.js'

function frontPage(){
    const mainDiv = document.querySelector("#navsNav")
    const nav = document.createElement("nav")
    mainDiv.appendChild(nav)

    for (let i=0;i<3;i++){
        const li = document.createElement("li")

        if (i === 0){
            li.className = "home"
            li.textContent = "Home"
        }else if(i === 1){
            li.className = "menu"
            li.textContent = "Menu"
        }else if (i === 2){
            li.className = "contactNav"
            li.textContent = "Contact"
        }
        nav.appendChild(li)
    }
}

frontPage()
home()

const menuTab = document.querySelector(".menu")   
const contactTab = document.querySelector(".contactNav")    
const homeTab = document.querySelector(".home")  

function homebtn(){
    home()
    homeTab.removeEventListener("click", homebtn)
    menuTab.addEventListener("click", menubtn)
    contactTab.addEventListener("click", contactbtn)
}


function menubtn(){
    menu()
    menuTab.removeEventListener("click", menubtn)
    homeTab.addEventListener("click", homebtn)
    contactTab.addEventListener("click", contactbtn)
}
menuTab.addEventListener("click", menubtn)

function contactbtn(){
    contact()
    contactTab.removeEventListener("click", contactbtn)
    homeTab.addEventListener("click", homebtn)
    menuTab.addEventListener("click", menubtn)
}
contactTab.addEventListener("click", contactbtn)










