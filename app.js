// show product in page

const container = document.getElementById('container')

fetch('json/full_store_mock_optimized.json')
.then(response => response.json())
.then(resp => {
    
    let ObjProducts = resp.products.slice(0 ,100)
    ObjProducts.forEach(element => {
        // console.log(element)    
        
        let ProductCard = document.createElement('div')
        ProductCard.classList.add('PRcard')

        let Title = document.createElement('h2')
        Title.classList.add('title')
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

    let H2 = document.querySelectorAll('#container h2').forEach(item =>{

    })
    
})

// show product in page

//creat a search bar

let MySearchBox = document.getElementById('searchBox')

// MySearchBox.addEventListener('input' , function(e){
//     const searchText = e.target.value.trim().toLowerCase();
//     const searchCard = document.querySelectorAll('.PRcard')
//     console.log(searchText)
    

//     searchCard.forEach((item)=>{
//         const cardTitle = item.querySelector('.title').textContent.trim().toLowerCase()

//         if(cardTitle.includes(searchText)){
//             item.style.display = 'block' //show products
//         } else{
//             item.style.display = 'none' //hide products
//         }
//     })

// })


MySearchBox.addEventListener('keydown' , function(e){
    if(e.key==='Enter'){
    const searchText = e.target.value.trim().toLowerCase();
    const searchCard = document.querySelectorAll('.PRcard')
    console.log(searchText)
    

    searchCard.forEach((item)=>{
        const cardTitle = item.querySelector('.title').textContent.trim().toLowerCase()

        if(cardTitle.includes(searchText)){
            item.style.display = 'block' //show products
        } else{
            item.style.display = 'none' //hide products
        }
    
    })

        }

})
