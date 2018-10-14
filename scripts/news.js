let tombolaSpan = $("#tombola");

tombolaSpan.on("click", () => {

    let formLength = $("article:has(form)").length,
        tombolaForm = $("<form id=\"tombola-form\"> </form>"),
        tombolaParagraph = $("#tmb");

    if (formLength < 1) {

        let formFirstName = $("<input type=\"text\" name=\"first-name\" placeholder=\"First name\"> </br>"),
            formLastName = $("<input type=\"text\" name=\"last-name\" placeholder=\"Last name\"> </br> "),
            formPhone = $("<input type=\"tel\" name=\"user-telephone\" placeholder=\"Phone number\"> </br>"),
            formReceipt = $("<input type=\"text\" name=\"receipt-code\" placeholder=\"Receipt\"> </br>s"),
            formSubmit = $("<input type=\"submit\" value=\"Submit\">");

        tombolaForm.append(formFirstName, formLastName, formPhone, formReceipt, formSubmit);
        tombolaParagraph.append(tombolaForm);
    }
    else {
        tombolaParagraph.find("#tombola-form").remove();
    }
});


