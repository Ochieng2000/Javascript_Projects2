const container = document.querySelector('.productsContainer');

function fetchProducts(){
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        container.style.backgroundColor = "white";
        let template = "";
        data.forEach( ({title, image, description, price}) => {        
            template +=`
                <div class="product">
                    <h2 class="title">${title}</h2>
                    <img src="${image}" alt="snow">            
                    <p class="description">${description}</p>            
                    <p class="price">$ ${price}</p>
                    <p class="button">Buy</p>
                </div>
        `
        });
        container.innerHTML = template;
    });
}
fetchProducts();
