/**
 * ORM class is a module type script, he is
 * imported in autoload file to be instancied 
 * and scoped in Window
 * 
 * Whith ORM we can use friendly methods to get and set some properties
 */

class ORM {

    catalogs = {};
    selected;

    /**
     * constructor loads all catalogs
     * 
     * @param {Object} catalogs 
     */
    constructor(catalogs) {
        for (const catalog in catalogs) {            
            let element = catalogs[catalog];
            Object.assign(this.catalogs,{
                [catalog] : element
            })                
        }
    }   

    /**
     * getORM
     * 
     * @return {ThisType} this
     * 
     * Without getORM those methods cannot retrieve "this" 
     * to get his properties
     * 
     * @example
     * 
     * let products = getORM()
     *      .loadCatalog("catalog")
     *      .findById(1);     
     * 
     */
    getORM() {
        return this;
    }

    /**
     * loadCatalog 
     * 
     * @param {String} catalogName 
     * @return {ThisType}
     * 
     * preloads the catalogue to be able to work 
     * with the following methods (findById, findAll,...)
     * 
     * 
     */
    loadCatalog(catalogName) {
        this.selected = this.catalogs[catalogName];
        return this;
    }

    /**
     * findById 
     * 
     * @param {String | Number} catalogId
     * @return {Object}
     * 
     * loops in the catalogue selected by loadCatalog 
     * and applies a filter to the identifier "id"
     * 
     */
    findById(catalogId) {

        var product = this.selected.filter((item) => {
            if (item.id == catalogId) {
                return true;
            }
        })[0];

        return product;
    }

    /**
     * findAll 
     * 
     * @return {Array<Object>}
     * 
     * returns whole selected catalogue
     */
    findAll() {
        
        return this.selected;
    }

    /**
     * findByField
     * 
     * @return {Object | Array<Object>} - - Returns only one object if only one has been found and an array of objects if several
     * 
     * Loop on the products in the selected catalog and search 
     * for a match based on the search parameter and on the options if provided 
     * 
     * @param {String} fieldName - Name of the field to which the filter is to be applied.
     * @param {String} search  - Searched String
     * @param {Object} options - Options {cs: false, like, false}
     */
    findByField(fieldName,search,options) {
        
        var cs = false;
        var like = false;

        if (options && Object.keys(options).length > 0 ) {
            if (options.hasOwnProperty('cs')) {
                cs = options.cs;
            }
            if (options.hasOwnProperty("like")) {
                like = options.like;
            }
        }

        var products = this.selected.filter((item) => {            
            let itemExpression = item[fieldName];
            let searchExpression = search;            
            let likeExpression = itemExpression.includes(search);

            if (cs === false) {
                itemExpression = item[fieldName].toLowerCase();
                searchExpression = search.toLowerCase(); 
                likeExpression = itemExpression.includes(searchExpression);
            }

            if (like && likeExpression || !like && itemExpression == searchExpression) {
                return true;
            } 

        });


        return products;
       
    }
}

export default ORM;