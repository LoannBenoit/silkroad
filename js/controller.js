
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



all_products.forEach(element => {
    console.log(element);
    
});

var i = 0;
all_products.forEach(element => {

$("<div></div>", {id: 'card_'+i, class: 'productCard col s12 m3'}).appendTo("#productCards");
$("<div></div>", {id: 'cardBackground_'+i, class: 'cardBackground z-depth-3' }).appendTo("#card_"+i);
$("<div></div>", {id: 'productName_'+i, class: 'productName' }).appendTo("#cardBackground_"+i);
$("<p></p>", {id: 'productNamePara_'+i, class: 'productNamePara', text: element.name}).appendTo("#productName_"+i);
$("<div></div>", {id: 'productPhoto_'+i, class: 'productPhoto'}).appendTo("#cardBackground_"+i);
$("<img>", {src: element.image}).appendTo("#productPhoto_"+i);
$("<div></div>", {id: 'productFooter_'+i, class: 'productFooter'}).appendTo("#cardBackground_"+i);
$("<p></p>", {id: 'productPricePara_'+i, class: 'productPricePara', text: element.price + ' €'}).appendTo("#productFooter_"+i);
$("<input>", {type: 'number', name: 'amount', value: '0', id: 'productAmount'}).appendTo("#productFooter_"+i);
$("div></div>", {class: 'icon', text: "Chariot"}).appendTo("#productFooter_"+i);

i++;
});
