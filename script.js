let burgerHolder = [];
let burgerEaten = [];

$("#burgerButton").on("click",(e) =>{ 
    e.preventDefault();

    let burgerInput = $("#burgerInput").val();
    burgerHolder.push(burgerInput);

    createBurger();
    
})

const createBurger = () => {

    $("#left-side-list").empty();
    for(let i = 0; i<burgerHolder.length; i++){
        const btnTag = $("<button>");
        btnTag.addClass("addedBurger");
        btnTag.attr("burgerType",burgerHolder[i]);
        btnTag.text(burgerHolder[i]);
        $("#left-side-list").append(btnTag);
    }
}

$(document).on("click", ".addedBurger", (e) =>{
    eatDaBurger($(e.target).attr("burgerType"))
});

const eatDaBurger = (eaten) => {

    let burgToEat = eaten;
    burgerEaten.push(burgToEat);

    $("#right-side-list").empty();
    for(let i = 0; i < burgerEaten.length; i++){

            const btnTag = $("<strike>");
            btnTag.addClass("addedBurger");
            btnTag.attr("burgerType",burgerEaten[i]);
            btnTag.text(burgerEaten[i]);
            $("#right-side-list").append(btnTag);
    }

    for(let x = 0; x < burgerHolder.length; x++){
        if(burgerHolder[x] === burgToEat){
            burgerHolder.splice(burgerHolder[x],1);
        }
        createBurger();
    }
    
}

 