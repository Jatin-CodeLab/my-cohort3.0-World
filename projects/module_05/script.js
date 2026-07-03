let form = document.querySelector("form");
const dateInput = document.getElementById("date");
let showHideForm = document.querySelector("#showHideForm");
let addForm = document.querySelector("#addForm");
let close = document.querySelector("#close");
let tbody = document.querySelector("tbody");
let type, discription, amount, date, category;
let transactionDetailsArr = []
let updateIndex = null


const today = new Date().toISOString().split("T")[0];
dateInput.value = today;
let uiUpdateation = () => {
	tbody.innerHTML = "";
	transactionDetailsArr.forEach((elem) => {
		tbody.innerHTML += `<tr>
									<td>${elem.date}</td>
									<td>${elem.discription}</td>
									<td>${elem.category}</td>
									<td class="income">${elem.amount}</td>
									<td class="income">${elem.type}</td>
									<td class="editAndDelete">
										<button onclick="update('${elem.date}')"><i class="ri-edit-2-line"></i></button
										><button onclick="deleteT('${elem.date}')"><i class="ri-delete-bin-4-line"></i></button>
									</td>
								</tr>`;
	});
};


form.addEventListener("submit", (e) => {
	e.preventDefault();

	let formObj = {
		type: e.target[0].value,
		discription: e.target[1].value,
		amount: e.target[2].value,
		date: e.target[3].value,
		category: e.target[4].value,
	};


	if (updateIndex !== null) {
		transactionDetailsArr[updateIndex] = formObj
		updateIndex = null
		
	} else {
		transactionDetailsArr.push(formObj)
	}

	
uiUpdateation();
	form.reset();
	showHideForm.style.display = "none";
});


let update = (date) => {
	showHideForm.style.display = "flex";	
	let fillForm = transactionDetailsArr.find((item) => item.date === date)
	updateIndex = transactionDetailsArr.findIndex((item) => item.date === date);

	form[0].value = fillForm.type
	form[1].value = fillForm.discription
	form[2].value = fillForm.amount
	form[3].value = fillForm.date
	form[4].value = fillForm.category
};
let deleteT = (index) => {
	transactionDetailsArr.splice(index, 1);
	uiUpdateation();
	console.log("DELETED PRODUCT !");
};










addForm.addEventListener("click", () => {
	showHideForm.style.display = "flex";
});
close.addEventListener("click", () => {
	showHideForm.style.display = "none";
});



const ctx = document.getElementById("myChart");

new Chart(ctx, {
	type: "bar",

	data: {
		labels: ["Income vs Expense"],

		datasets: [
			{
				label: "Income",
				data: [100],
				backgroundColor: "green",
			},
			{
				label: "Expense",
				data: [250],
				backgroundColor: "red",
			},
		],
	},
});

let income = 0;
let expense = 0;

transactionDetailsArr.forEach((item) => {
	if (item.type === "Income") {
		income += Number(item.amount);
	} else {
		expense += Number(item.amount);
	}
});
