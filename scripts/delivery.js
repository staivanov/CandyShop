let countries = ["Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Cameroon",
    "Cape Verde",
    "Somalia",
    "Togo",
    "Zimbabwe"];
let noDelivery = $("#no-delivery-countries");
let showCountriesButton = $("#showCountries");

showCountriesButton.on("click", function () {

    if (noDelivery.children().length > 0) {
        noDelivery.html(" ");
        showCountriesButton.html("Show");
    }
    else {

        for (let country of countries) {
            noDelivery.append(`<li> ${country}</li>`);
        }

        showCountriesButton.html("Hide");
    }
});

$.ajax({
    url: "data/delivery.json",
    success: function (data) {

        let section = $("section");

        for (let item of data) {
            section.append(`<article>
            <h3> ${item.title} </h3>
            <p> ${item.text} </p>
            <button class=\"delivery\">Show</button>
            </article>`);
        }
        $("button.delivery").on("click", function () {

            if ($(this).text() == "Hide") {
                $(this).prev().hide();
                $(this).html("Show");
            }
            else {
                $(this).prev().show();

                $(this).html("Hide");
            }
        });
    }
});
