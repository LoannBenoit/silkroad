import BaseController from '../kernel/BaseController.js'

/**
 * DO NOT IMPORT ANY MODULE HERE, CONTROLLERS ARE NOT TYPED MODULE 
 * 
 * Lambda text/javascript script
 * controllers need to be hard coded within a script tag
 * 
 * No need to define a window.onload if controller is defined in window file.
 */

class TestController extends BaseController{

    constructor() {
        super()
    }


    getProductsData(products) {
        return Promise.all(
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
    }
        
    async f(products) {
        return await this.getProductsData(products)    
    }
    
    render() {
        
        let all_products = this.loadCatalog('all').findAll()    

        this.f(all_products).then(products => {    
            this.setTemplate('/templates/lol.html',
                {
                    title: 'Products',
                    products: products
                })
                .setRoot('content')
                .apply()
        })
    }

}

export default TestController