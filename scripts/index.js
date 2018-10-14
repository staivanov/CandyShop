let indexSaltyURL = "data/index-salty.json",
    indexCakesURL = "data/index-cakes.json";
let saltyProducts = $("#salty-products");
let sweetProducts = $("#sweet-products");

function getIndexProduct(url, categoryProduct) {
    $.ajax({
        url: url,
        success: function (data) {
            for (let item of data) {
                categoryProduct.append($(`<article> 
            <img src=\"${item.imgURL}\" class=\"zoom\" alt=\"${item.name}\"> <h2> ${item.name}</h2>
            <p>Price: ${item.price}</p> <p> In stock: ${item.isAvailable}</p></article>`));
            }
        }
    });
}

getIndexProduct(indexCakesURL, sweetProducts);
getIndexProduct(indexSaltyURL, saltyProducts);