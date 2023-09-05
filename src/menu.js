export function menu(){
    const homeDiv = document.querySelectorAll(".homeDiv")
    const contactDiv = document.querySelectorAll(".contactDiv")

    homeDiv.forEach(item => {
        item.style.display = "none"
    })
    
    contactDiv.forEach(item => {
        item.style.display = "none"
    })
    
    
    const mainDiv = document.querySelector("#content")

    const h1 = document.createElement("h1")
    mainDiv.appendChild(h1).className = "h1 menuDiv";
    h1.textContent = "Menu Page"

    //div1 
    const div1 = document.createElement("div")
    const head1 = document.createElement("h2")
    const article1 = document.createElement("article")

    mainDiv.appendChild(div1).className = "menuDiv"
    div1.appendChild(head1).className = "h2"
    div1.appendChild(article1).className = "article1"

    head1.textContent = "Appetizers"
    article1.textContent = "Start your meal with our tantalizing appetizers, crafted with the finest ingredients and bursting with flavor. From crispy calamari to artisanal bruschetta, there's something for everyone."


    //div2
    const div2 = document.createElement("div")
    const head2 = document.createElement("h2")
    const article2 = document.createElement("article")

    mainDiv.appendChild(div2).className = "menuDiv"
    div2.appendChild(head2).className = "h2"
    div2.appendChild(article2).className = "article2"

    head2.textContent = "Main Courses"
    article2.textContent = "Our main courses are the heart of our menu. Explore a diverse range of options, from succulent steaks to vegetarian delights. Don't forget to ask about our chef's specials!"
    
    //div3
    const div3 = document.createElement("div")
    const head3 = document.createElement("h2")
    const article3 = document.createElement("article")

    mainDiv.appendChild(div3).className = "menuDiv"
    div3.appendChild(head3).className = "h2"
    div3.appendChild(article3).className = "article3"

    head3.textContent = "Desserts"
    article3.textContent = "Save room for our decadent desserts! Indulge in sweet creations that will satisfy your cravings and leave you wanting more. Be sure to try our signature dessert, [Restaurant Name]'s Delight."
    
}