
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
    $("<div></div>", {id: 'chariot_'+i, class: 'icon'}).appendTo("#productFooter_"+i)
    $(".icon").append("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0zm18.31 6l-2.76 5z\" fill=\"none\"/><path d=\"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z\"/></svg>")

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
