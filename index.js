let productContainer = document.getElementById("products-container")
let hamburgericon = document.getElementById("hamburger-icon")
let navItemsDropDown = document.getElementById("nav-items-down")


// When the user clicks on the hamburger-icon the nav-dropdown will be hidden/shown
hamburgericon.addEventListener('click', () => {
    navItemsDropDown.classList.toggle("nav-items-down2")
    console.log("clicked")
})



// Fetching prodcuts 
fetch('https://products-api-2ttf.onrender.com/api/products')
    .then((response) => response.json())
    .then(data => {
        data.map(each => {
            console.log(each.title, 'title')
            if (each.title !== "Latest Edition") {
                let innerDivElement = document.createElement('div')
                innerDivElement.classList.add('right-side-container')
                productContainer.appendChild(innerDivElement)

                let imgElement = document.createElement('img')
                imgElement.setAttribute('src', `${each.image}`)
                imgElement.setAttribute('alt', `${each.title}`)
                imgElement.style.width = "100%"
                innerDivElement.appendChild(imgElement)


                console.log(productContainer.innerHTML)
            } else {
                let h2Element = document.createElement('h2')
                h2Element.textContent = "Fashion is not about clothes, it's about a look"
                h2Element.style.order = 2;
                h2Element.classList.add('product-3-container')
                productContainer.appendChild(h2Element)
            }
        })
    })
    .catch(err => console.log(err))
