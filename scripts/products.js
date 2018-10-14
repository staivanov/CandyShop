let section = $("section");
let databaseURL = "data/allProducts.json";
let allProducts = [];
let filterProducts = [];

let productTemplate = function (data) {
    for (let item of data) {
        section.append(`<article> 
            <img src=\"${item.imgURL}\" alt=\"${item.name}\" class=\"zoom\">
            <h4> ${item.name} </h4>
            <div> Content: ${item.content} </div>
            <div class=\"price\"> Price: ${item.price} </div>
            <div>In stock: ${item.inStock} </div>
            <div>Size: ${item.size} gr. </div>
            </article>`);
    }
};

let requestProduct = function (url) {
    $.ajax({
        url: url,
        success: function (data) {
            allProducts = data;
            filterProducts = data;
            productTemplate(filterProducts);
        }
    });
};

requestProduct(databaseURL);

$("input[type=checkbox]").on("click", function () {
    filterProducts = [];
    let allCheckedInputs = $(":checked");
    section.empty();

    if (allCheckedInputs.length > 0) {

        for (let checkedInput of allCheckedInputs) {

            let productsByType = allProducts.filter((product) => {
                return product.type === checkedInput.name;
            });

            filterProducts.push(...productsByType);
        }

        section.empty();
        productTemplate(filterProducts);
    } else {
        section.empty();
        productTemplate(allProducts);
    }
});

