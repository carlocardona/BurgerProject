$(() => {
    $(".eat-burger").on("click", function (event) {
        const id = $(this).data("id");
        const eatenBurger = $(this).data("eatenBurger");

        const burgerStatus = {
            eaten: eatenBurger
        }
    })

    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: burgerStatus
    }).then(() => {
        console.log("Burger Eaten");
        location.reload();
    });
})