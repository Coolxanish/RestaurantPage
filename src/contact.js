export function contact(){
    const homeDiv = document.querySelectorAll(".homeDiv")
    const menuDiv = document.querySelectorAll(".menuDiv")
    homeDiv.forEach(item => {
        item.style.display = "none"
    })
    
    menuDiv.forEach(item => {
        item.style.display = "none"
    })

    const mainDiv = document.querySelector("#content")
    mainDiv.innerHTML = "";

    const h1 = document.createElement("h1")
    mainDiv.appendChild(h1).className = "h1 contactDiv"
    h1.textContent = "Contact Info"
    

    for (let i=0;i<3;i++){
        const ul = document.createElement("ul")
        
        if (i === 0){
            ul.className = "location contactDiv article1"
        }else if (i === 1){
            ul.className = "contact contactDiv article1" 
        }else if (i === 2){
            ul.className = "connect contactDiv article1"
        }

        mainDiv.appendChild(ul)
        
    }

    
    function locationInfo() {
        const location = document.querySelector(".location")
        const head = document.createElement("h2")
        location.appendChild(head).className = "h2"
        head.textContent = "Location"

        for (let i=0;i<3;i++){
            const li = document.createElement("li")

            if (i === 0){
                li.className = "li1"
                li.textContent = "Ralli's Restaurant"
            }else if (i === 1){
                li.className = "li2"
                li.textContent = "69th Street"
            }else if (i === 2){
                li.className = "li3"
                li.textContent = "Mumbai"
            }

            location.appendChild(li)
        }

    }

    function contactInfo(){
        const contact = document.querySelector(".contact")
        const head = document.createElement("h2")
        contact.appendChild(head).className = "h2"
        head.textContent = "Contact"

        for (let i=0;i<2;i++){
            const li = document.createElement("li")

            if (i === 0){
                li.className = "phNo"
                li.textContent = "Phone: 7***185709"
            }else if (i === 1){
                li.className = "email"
                li.textContent = "rallis@gmail.com"
            }

            contact.appendChild(li)
        }

    }

    function connect(){
        const connect = document.querySelector(".connect")
        const head = document.createElement("h2")
        connect.appendChild(head).className = "h2"
        head.textContent = "Connect With Us"

        for (let i=0;i<3;i++){
            const links = document.createElement("a")

            if (i === 0){
                links.innerHTML = `<i class="fa-brands fa-facebook"></i>`
            }else if (i === 1){
                links.innerHTML = `<i class="fa-brands fa-instagram"></i>`
            }else if (i === 2){
                links.innerHTML = `<i class="fa-brands fa-twitter"></i>`
            }

            connect.appendChild(links)
        }

    }
    contactInfo()
    locationInfo()
    connect()
}
