$("#burgerButton").on("click",(e) =>{ 
    e.preventDefault();

    let burgerInput = $("#burgerInput").val();
    console.log(burgerInput);
})

// const eatBurg = () => {
//     console.log('eat Burg');
// }