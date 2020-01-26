
/**
 * Lambda text/javascript script
 * controllers need to be hard coded within a script tag
 * 
 * No need to define a window.onload if controller is defined in window file.
 */

const OC = Window.ORMClient;
var tabPanier = new Array();

//let product_with_id_1 = OC.getORM().loadCatalog("catalog_highTech").findById(1);


// searchOptions = {
//     "cs": false, /* case sensitive */
//     "like": false /* includes %like% */
// }

// let search_by_fieldname = OC.getORM()
//     .loadCatalog("catalog_highTech")
//     .findByField("name","Je suis ISLAM")



// all_products.forEach(element => {
//     console.log(element);
    
// });

//Chargement du premier catalogue au démarage
$("#productCards").empty();
loadCatalog("catalog_fruit");


$( "#catalogFruits" ).click(function() {
$("#productCards").empty();
loadCatalog("catalog_fruit");
});

$( "#catalogSpace" ).click(function() {
$("#productCards").empty();
loadCatalog("catalog_space");
});

$( "#catalogHighTech" ).click(function() {
$("#productCards").empty();
loadCatalog("catalog_highTech");
});

$( "#catalogTest" ).click(function() {
$("#productCards").empty();
loadCatalog("catalogTest");
});

function loadCatalog(catalogName){
    let all_products = OC.getORM().loadCatalog(catalogName).findAll();
    var i = 0;
    all_products.forEach(element => {

    $("<div></div>", {id: 'card_'+i, class: 'productCard col s12 m3'}).appendTo("#productCards");
    $("<div></div>", {id: 'cardBackground_'+i, class: 'cardBackground z-depth-3' }).appendTo("#card_"+i);
    $("<div></div>", {id: 'productName_'+i, class: 'productName' }).appendTo("#cardBackground_"+i);
    $("<p></p>", {id: 'productNamePara_'+i, class: 'productNamePara', text: element.name}).appendTo("#productName_"+i);
    $("<div></div>", {id: 'productPhoto_'+i, class: 'productPhoto'}).appendTo("#cardBackground_"+i);
    $("<img>", {src: element.image}).appendTo("#productPhoto_"+i);
    $("<div></div>", {id: 'productFooter_'+i, class: 'productFooter'}).appendTo("#cardBackground_"+i);
    $("<p></p>", {id: 'productPricePara', class: 'productPricePara', text: element.price + ' €'}).appendTo("#productFooter_"+i);
    $("<input>", {id: 'productAmount', type: 'number', name: 'amount', value: '0'}).appendTo("#productFooter_"+i);
    $("<div></div>", {id: 'chariot_'+i, class: 'icon', text: "Chariot"}).appendTo("#productFooter_"+i);

    i++;
    });
}

$(".icon").click(function() {
    var div = "#"+this.id;
    var quantite = $(div).parents().children("#productAmount").val();
    var prix = $(div).parents().children("#productPricePara").text();
    var nom = $("#"+$(div).parents().attr("id")).parents().children(".productName").text();
    quantite = parseInt(quantite);
    prix = parseFloat(prix);

    if(quantite > 0){
        addProduct(nom,quantite,prix)
    }
    
})

function addProduct(nom, quantite, prix){
    console.log(nom+"/"+quantite+"/"+prix);

    $("<p></p>", {id: 'prod_panier', class: 'productList', text: quantite + " X " + nom +" ("+ prix +" €/pcs)"+ " - " + prix*quantite + " €"}).appendTo("#productList");
}
