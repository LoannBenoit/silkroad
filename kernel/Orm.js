import Engine from './Engine.js'
import { catalogs } from '../js/autoload.js'

/**
 * ORM class is a module type script, he is
 * imported in autoload file to be instancied 
 * and scoped in window object
 * 
 * Whith ORM we can use friendly methods to get and set some properties
 */
class ORM extends Engine {

    catalogs = {}
    selected

    /**    
    * constructor
    * @description loads all catalogs     
    * @param {catalogs} catalogs 
    * @return void
    */
    constructor(catalogs) {
        super()
        for (const catalog in catalogs) {
            let products = catalogs[catalog]
            Object.assign(this.catalogs, {
                [catalog]: products
            })
        }
    }

    /**
     * loadCatalog      
     * @param {String} catalogName      
     * @description preloads the catalogue to be able to work 
     * with the following methods (findById, findAll,...)          
     * @return this
     */
    loadCatalog(catalogName) {
        this.selected = this.catalogs[catalogName]
        return this
    }

    /**
     * findById      
     * @param {number} catalogId
     * @description loops through the selected catalog
     * and apply a filter on the identifier 'id'     
     * @return object
     */
    findById(catalogId) {

        var product = this.selected.filter((item) => {
            if (item.id == catalogId) {
                return true
            }
        })[0]

        return product
    }

    /**
     * findAll      
     * @description returns selected catalog
     * @return this.selected
     */
    findAll() {
        return this.selected
    }

    /**
     * findByField     
     * @param {string} fieldName - name of the field to which the filter is applied
     * @param {string} search  - needle
     * @param {string} options - Options {cs: false, like, false}     
     * @description Loop on the products in the selected catalog and search 
     * for a match based on the search parameter and on the options if provided      
     * @return Array<object> - Returns only one object if only one has been found and an array of objects if several
     */

    findByField(fieldName, search, options) {

        const products = this.selected.filter((item) => {

            let fieldValue = item[fieldName].toLowerCase()
            let searchValue = search.toLowerCase()
            let matchExpr = fieldValue === searchValue

            if (Object.keys(options).length > 0) {
                if (options.hasOwnProperty('cs')) {
                    if (options.cs === true) {
                        fieldValue = item[fieldName]
                        searchValue = search
                        matchExpr = fieldValue === searchValue
                    }
                }
                if (options.hasOwnProperty('like')) {
                    if (options.like === true) {
                        matchExpr = fieldValue.includes(searchValue)
                    }
                }
            }

            return matchExpr

        })

        return products
    }
}

export default ORM