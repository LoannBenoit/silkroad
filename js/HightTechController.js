import BaseController from '../kernel/BaseController.js'

/**
 * DO NOT IMPORT ANY MODULE HERE, CONTROLLERS ARE NOT TYPED MODULE 
 * 
 * Lambda text/javascript script
 * controllers need to be hard coded within a script tag
 * 
 * No need to define a window.onload if controller is defined in window file.
 */

class HightTechController extends BaseController {

    products = {}

    constructor() {
        super()
    }

    load() {

        let products = this.loadCatalog('catalog_2').findAll()

        this.products =
            Promise.all(
                products.map(async (item) => {
                    item = await this.getSnippet('templates/product.html', {
                        name: item.name,
                        description: item.description,
                        image: item.image,
                        price: item.price
                    })
                    return item
                })
            )
    }

    render() {
        this.products.then(products => {
            this.setTemplate('templates/list.html', {
                title: 'Hight-Tech',
                products: products.join('')
            })
                .setRoot('content')
                .apply()
        })
    }

}

export default HightTechController