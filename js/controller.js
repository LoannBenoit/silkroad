
/**
 * Lambda text/javascript script
 * controllers need to be hard coded within a script tag
 * 
 * No need to define a window.onload if controller is defined in window file.
 */

const OC = Window.ORMClient;

let product_with_id_1 = OC.getORM().loadCatalog("catalog_1").findById(1);
let all_products = OC.getORM().loadCatalog("catalog_1").findAll();

searchOptions = {
    "cs": false, /* case sensitive */
    "like": false /* includes %like% */
}

let search_by_fieldname = OC.getORM()
    .loadCatalog("catalog_1")
    .findByField("name","Je suis ISLAM")

console.log('findById ------- \n',product_with_id_1)
console.log('-------');

console.log('findAll ------- \n',all_products)
console.log('-------');

console.log('findByField ------- \n',search_by_fieldname)
console.log('-------');
// console.log(all_products)
// console.log(search_by_fieldname)