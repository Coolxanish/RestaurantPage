export default function home(){
    const contactDiv = document.querySelectorAll(".contactDiv")
    const menuDiv = document.querySelectorAll(".menuDiv")
    menuDiv.forEach(item => {
        item.style.display = "none"
    })
    contactDiv.forEach(item => {
        item.style.display = "none"
    })

    const mainDiv = document.querySelector("#content")
    
    const div1 = document.createElement("div")
    div1.classList.add("homeDiv")
    const head1 = document.createElement("h1")
    head1.classList.add("h1")
    const article1 = document.createElement("article")
    article1.classList.add("article1")
    
    //appends
    mainDiv.appendChild(div1)
    div1.appendChild(head1)
    div1.appendChild(article1)

    const div2 = document.createElement("div")
    div2.classList.add("homeDiv")
    const head2 = document.createElement("h2")
    head2.classList.add("h2")
    const article2 = document.createElement("article")
    article2.classList.add("article2")
    
    //appends
    mainDiv.appendChild(div2).className = "homeDiv homeDivCss"
    div2.appendChild(head2)
    div2.appendChild(article2)

    const div3 = document.createElement("div")
    div3.classList.add("homeDiv")
    const head3 = document.createElement("h2")
    head3.classList.add("h3")
    const article3 = document.createElement("article")
    article3.classList.add("article3")
    
    //appends
    mainDiv.appendChild(div3).className = "homeDiv homeDivCss"
    div3.appendChild(head3)
    div3.appendChild(article3)


    //content 
    head1.textContent = "Welcome to Ralli's"
    article1.textContent = "Welcome to a culinary journey like no other! At Ralli's, we strive to tantalize your taste buds with an exquisite fusion of flavors, artfully prepared by our talented chefs."

    head2.textContent = "Experience the Extraordinary"
    article2.textContent = "Indulge in an unforgettable dining experience where every dish is a masterpiece and every moment is a celebration of food and life. Discover the perfect blend of tradition and innovation in every bite."
    
    head3.textContent = "Our Story"
    article3.textContent = "Ralli's has been a beloved culinary destination since [year of establishment]. Learn about our rich history, passion for food, and commitment to excellence."
}



