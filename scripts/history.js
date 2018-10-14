$.ajax({
    url: "data/history.json",
    success: function (data) {

        let section = $("section");

        for (let item of data) {

            section.append(`<article> 
            <h3> ${item.name}</h3>
            <img src=\"${item.imgURL}\" class=\"zoom\">
            </br>
            <span> Created year: ${item.year} </span>
            </br>
            <span> Moto:  ${item.moto}</span>
            <p>${item.overview}</p>
            </article>`);
        }
    }
});