
/**
 * Lambda text/javascript script
 * controllers need to be hard coded within a script tag
 * 
 * No need to define a window.onload if controller is defined in window file.
 */

const OC = Window.ORMClient;
let tabPanier = new Array();

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

$( "#catalogFruits" ).click(() => {
    $("#productCards").empty();
    loadCatalog("catalog_fruit");
});

$( "#catalogSpace" ).click(() => {
    $("#productCards").empty();
    loadCatalog("catalog_space");
});

$( "#catalogHighTech" ).click(() => {
    $("#productCards").empty();
    loadCatalog("catalog_highTech");
});

$( "#catalogTest" ).click(() => {
    $("#productCards").empty();
    loadCatalog("catalogTest");
});

function loadCatalog(catalogName){
    console.log({catalogName})
    
    let all_products = OC.getORM().loadCatalog(catalogName).findAll();
    console.log({ all_products })
    console.log("coucou")
    
    all_products.forEach((element, i) => {

    $("<div></div>", {id: 'card_'+i, class: 'productCard col s12 m4'}).appendTo("#productCards");
    $("<div></div>", {id: 'cardBackground_'+i, class: 'cardBackground z-depth-3' }).appendTo("#card_"+i);
    $("<div></div>", {id: 'productName_'+i, class: 'productName' }).appendTo("#cardBackground_"+i);
    $("<p></p>", {id: 'productNamePara_'+i, class: 'productNamePara', text: element.name}).appendTo("#productName_"+i);
    $("<div></div>", {id: 'productPhoto_'+i, class: 'productPhoto'}).appendTo("#cardBackground_"+i);
    $("<img>", {src: element.image}).appendTo("#productPhoto_"+i);
    $("<div></div>", {id: 'productFooter_'+i, class: 'productFooter'}).appendTo("#cardBackground_"+i);
    $("<p></p>", {id: 'productPricePara', class: 'productPricePara', text: element.price + ' €'}).appendTo("#productFooter_"+i);
    $("<input>", {id: 'productAmount', type: 'number', name: 'amount', value: '0'}).appendTo("#productFooter_"+i);
    $("<div></div>", {id: 'chariot_'+i, class: 'icon', text: "Chariot"}).appendTo("#productFooter_"+i);
    });
}

$(".icon").click(function() {
    console.log("clicked !")
    let div = "#"+this.id,
    quantite = $(div).parents().children("#productAmount").val(),
    prix = $(div).parents().children("#productPricePara").text(),
    nom = $("#"+$(div).parents().attr("id")).parents().children(".productName").text();

    quantite = parseInt(quantite);
    prix = parseFloat(prix);

    console.log({div, quantite, prix, nom});

    if(quantite > 0){
        addProduct(nom, quantite, prix)
    }
    
})

function addProduct(nom, quantite, prix){
    console.log(nom+"/"+quantite+"/"+prix);

    $("<p></p>", {id: 'prod_panier', class: 'productList', text: quantite + " X " + nom +" ("+ prix +" €/pcs)"+ " - " + prix*quantite + " €"}).appendTo("#productList");
}
