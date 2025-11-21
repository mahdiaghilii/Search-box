// show product in page

const container = document.getElementById('container')

fetch('json/full_store_mock_optimized.json')
.then(response => response.json())
.then(resp => {
    
    let ObjProducts = resp.products.slice(0 ,100)
    ObjProducts.forEach(element => {
        console.log(element)    
        
        let ProductCard = document.createElement('div')

        let Title = document.createElement('h2')
        Title.innerText = element.title.en

        let Photo = document.createElement('img')
        Photo.setAttribute('src' , element.images[0].url)
        Photo.setAttribute('alt' , element.images[0].alt.en)

        let Description = document.createElement('p')
        Description.innerText = element.description.en

        let Price = document.createElement('button')
        Price.innerText = element.price.amount

        ProductCard.append(Photo)
        ProductCard.append(Title)
        ProductCard.append(Photo)
        ProductCard.append(Price)
        container.append(ProductCard)
    });
    
})

// show product in page

