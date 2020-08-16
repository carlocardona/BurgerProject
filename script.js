let burgerHolder = [];

$("#burgerButton").on("click",(e) =>{ 
    e.preventDefault();

    let burgerInput = $("#burgerInput").val();
    burgerHolder.push(burgerInput);

    //Create Burger Button
    $("#left-side-list").empty();
    for(let i = 0; i<burgerHolder.length; i++){
        const btnTag = $("<button>");
        btnTag.addClass("burgerButton");
        btnTag.attr("burgerType",burgerHolder[i]);
        btnTag.text(burgerHolder[i]);
        $("#left-side-list").append(btnTag);
    }


})

