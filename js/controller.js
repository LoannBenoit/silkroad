/**
 * Lambda text/javascript script
 * controllers need to be hard coded within a script tag
 * 
 * No need to define a window.onload if controller is defined in window file.
 */

const OC = Window.ORMClient;
var tabPrix = new Array();
var tabQte = new Array();
var tabNom = new Array();
var prixTotal = 0;
var div = ''
    //let search_by_fieldname
    //let product_with_id_1 = OC.getORM().loadCatalog("catalog_highTech").findById(1);


// searchOptions = {
//     "cs": false, /* case sensitive */
//     "like": false /* includes %like% */
// }


$("#searchBar").change(function() {
    console.log("search");
    let search_by_fieldname = OC.getORM()
        .loadCatalog("all")
        .findByField("name", this.value, { like: true });
    console.log(search_by_fieldname);
    $("#productCards").empty();
    loadCatalog(search_by_fieldname)
})

// all_products.forEach(element => {
//     console.log(element);

// });

//Chargement du premier catalogue au démarage
$("#productCards").empty();
loadCatalog(OC.getORM().loadCatalog("catalog_highTech").findAll());

$("#catalogFruits").click(() => {
    $("#productCards").empty();
    loadCatalog(OC.getORM().loadCatalog("catalog_fruit").findAll());
});

$("#catalogSpace").click(() => {
    $("#productCards").empty();
    loadCatalog(OC.getORM().loadCatalog("catalog_space").findAll());
});

$("#catalogHighTech").click(() => {
    $("#productCards").empty();
    loadCatalog(OC.getORM().loadCatalog("catalog_highTech").findAll());
});

$("#catalogTest").click(() => {
    $("#productCards").empty();
    loadCatalog(OC.getORM().loadCatalog("catalogTest").findAll());
});

function loadCatalog(products = []) {
    //console.log({products})

    products.forEach((element, i) => {

        $("<div></div>", { id: 'card_' + i, class: 'productCard col s12 m4' }).appendTo("#productCards");
        $("<div></div>", { id: 'cardBackground_' + i, class: 'cardBackground z-depth-3' }).appendTo("#card_" + i);
        $("<div></div>", { id: 'productName_' + i, class: 'truncate productName' }).appendTo("#cardBackground_" + i);
        $("<p></p>", { id: 'productNamePara_' + i, class: 'productNamePara', text: element.name.slice(0, 20) }).appendTo("#productName_" + i);
        $("<div></div>", { id: 'productPhoto_' + i, class: 'productPhoto' }).appendTo("#cardBackground_" + i);
        $("<img>", { src: element.image }).appendTo("#productPhoto_" + i);
        $("<div></div>", { id: 'productFooter_' + i, class: 'productFooter' }).appendTo("#cardBackground_" + i);
        $("<p></p>", { id: 'productPricePara', class: 'productPricePara', text: element.price + ' €' }).appendTo("#productFooter_" + i);
        $("<input>", { id: 'productAmount_' + i, class: 'handleAmount', type: 'number', name: 'amount', value: '0', min: '0', max: '9' }).appendTo("#productFooter_" + i);
        $("<div></div>", { id: 'chariot_' + i, class: 'icon' }).appendTo("#productFooter_" + i);
    });
    $(".icon").append("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0zm18.31 6l-2.76 5z\" fill=\"none\"/><path d=\"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z\"/></svg>")

    $(".icon").click(function() {
        //console.log("clicked !")
        div = "#" + this.id,
            //quantite = $(div).parents().children("#productAmount").val(),
            prix = $(div).parents().children("#productPricePara").text(),
            nom = $("#" + $(div).parents().attr("id")).parents().children(".productName").text();

        quantite = parseInt(quantite);
        prix = parseFloat(prix);

        //console.log({div, quantite, prix, nom});
        if (quantite > 0) {
            addProduct(nom, quantite, prix)
                // console.log($(div).parents().children("#productAmount").val());
        }
        quantite = 0
    })

    $(".handleAmount").change(function(ev) {
        div = "#" + this.id

        if (Number(ev.target.value) > 0) {
            console.log(Number(ev.target.value))
            console.log($(div).next())
            let idChariot = $(div).next()

            $(idChariot).addClass('valueMore');
        }
        if (Number(ev.target.value) == 0) {
            $('.icon').removeClass('valueMore');
        }

        if (Number(ev.target.value) <= 9 && Number(ev.target.value) >= 0) {
            //console.log("OK");
            quantite = Number(ev.target.value)
        } else {
            //console.log("NOK");
            $(this).val(0)
        }
    })
}

function removeProduct(product) {
    console.log("delete " + product);
    for (var i = 0; i < tabNom.length; i++) {
        if (tabNom[i] == product) {
            console.log("Trouvé" + i);
            tabNom[i] = ""
            tabPrix[i] = ""
            tabQte[i] = ""
                //Suppression des éléments vides de chaque tableau
            tabNom = jQuery.grep(tabNom, function(val) {
                if (val == "" || val == NaN || val == undefined || val == null) {
                    return false;
                }
                return true;
            });
            tabPrix = jQuery.grep(tabPrix, function(val) {
                if (val == "" || val == NaN || val == undefined || val == null) {
                    return false;
                }
                return true;
            });
            tabQte = jQuery.grep(tabQte, function(val) {
                if (val == "" || val == NaN || val == undefined || val == null) {
                    return false;
                }
                return true;
            });
            // console.log(tabNom);
            // console.log(tabPrix);
            // console.log(tabQte);
            MajPanier()
        }
    }
}

function MajPanier() {
    //console.log("maj panier");
    prixTotal = 0
    $("#productList").empty();
    for (var i = 0; i < tabNom.length; i++) {
        var nom = tabNom[i];
        var prix = tabPrix[i];
        var qte = tabQte[i];
        var prodTotal = prix * qte
            //console.log(nom + "/"+prix+"/"+qte);
        $("<p></p>", { id: 'prod_panier_' + i, class: 'prod_panier', produit: nom, text: qte + " X " + nom + " - " + prodTotal.toFixed(2) + " €" }).appendTo("#productList");
        $("#prod_panier_" + i).append("&nbsp;&nbsp;&nbsp;")
        $("#prod_panier_" + i).append("<svg aria-hidden=\"true\" id=remove_" + i + " class=remove focusable=\"false\" width=\"20\" height=\"20\" data-prefix=\"fas\" data-icon=\"trash\" class=\"svg-inline--fa fa-trash fa-w-14\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z\"></path></svg>")

        prixTotal += (tabPrix[i] * tabQte[i]);
    }

    $("#totalPrice").html(prixTotal.toFixed(2) + " €");

    $(".remove").click(function() {
        var product = $("#" + this.id).parent().attr("produit")
            //console.log(product);
        removeProduct(product)
    })
}

function addProduct(nom, quantite, prix) {
    //console.log(nom+"/"+quantite+"/"+prix);  
    var artPresent = false;

    for (var i = 0; i < tabNom.length; i++) {
        if (tabNom[i] == nom) {
            //console.log("Déjà présent !"+i);
            tabQte[i] += quantite;
            artPresent = true;
        }
    }

    if (artPresent == false) {
        //console.log("Nouvel Article");
        tabNom.push(nom);
        tabPrix.push(prix);
        tabQte.push(quantite);
    }
    MajPanier();
    $('.handleAmount').val(0)
    $('.handleAmount').trigger('change')
}