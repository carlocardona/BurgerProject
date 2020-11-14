$(() => {
    $(".change-devoured").on("click", function (event) {
        const id = $(this).data("id");
        const newDevoured = $(this).data("newdevour");

        const newDevouredState = {
            devoured: newDevoured,
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState,
        }).then(() => {
            console.log("changed devoured to", newDevoured);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".create-form").on("submit", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#burger").val().trim(),
            devoured: $("input[name=devoured]:checked").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(() => {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });
});