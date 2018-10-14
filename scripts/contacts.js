$.ajax({
    url: "data/contacts.json",
    success: function (data) {

        for (let candyAdrress of data) {
            let article = $("<article> </article"),
                img = `<img src=${candyAdrress.imgURL} class=\"zoom\">`,
                mail = `<a href=\"mailto: someone@mail.com\">${candyAdrress.mail} </a>`,
                phone = `<a href=\"tel:+xxxxx\"> ${candyAdrress.phone} </a>`,
                address = `<address> ${mail} </br> </br> ${phone} </br> </br> ${candyAdrress.address}
                           </br> ${candyAdrress.city} </br> ${candyAdrress.countrey} </address>`,
                overview = `<p> ${candyAdrress.overview} </p>`;
            article.append(img, address, overview);
            $("section").append(article);
        }
    }
});