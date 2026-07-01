let createProduct = document.querySelector("#cretaeProductLargeScreenBtn");
let openForm = document.querySelector("#fillTheForm");
let closeForm = document.querySelector(".close");
let orignalForm = document.querySelector("form");
let productsArr = []
createProduct.addEventListener("click", () => {
	openForm.style.display = "flex";
});

closeForm.addEventListener("click", () => {
	openForm.style.display = "none";
});

orignalForm.addEventListener("submit", (e) => {
	e.preventDefault();

	let productName = e.target[0].value;
	let productDiscription = e.target[1].value;
	let productPrice = e.target[2].value;
    let productUrl = e.target[3].value;
    
    let productObject = {
        productName,
        productDiscription,
        productPrice,
        productUrl,
    }
    productsArr.push(productObject)
    console.log(productsArr);
    
    orignalForm.reset()
});
