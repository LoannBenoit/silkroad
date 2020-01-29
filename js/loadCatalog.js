import ORM from '../kernel/Orm.js'

console.log("Je charge le catalogue ...");
let products = this.loadCatalog('catalog_1').findAll()    

this.products =  
    Promise.all(
        products.map(async (item) => {
            item = await this.getSnippet('/templates/product.html',{
                name: item.name,
                description: item.description,
                image: item.image,
                price: item.price
            })
            return item
        })
    )