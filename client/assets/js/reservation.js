document.querySelector("#customerIdCheck").addEventListener("click", () => {
	let status = document.querySelector("#customerIdCheck").checked;

	if (status == true) {
		document.querySelector("#oldCustomer").setAttribute("data-active", "true");
		document.querySelector("#newCustomer").setAttribute("data-active", "false");
	} else {
		document.querySelector("#oldCustomer").setAttribute("data-active", "false");
		document.querySelector("#newCustomer").setAttribute("data-active", "true");
	}
});

document.querySelector("#submitReservation").addEventListener("click", () => {
	document.querySelector("#customerEmail").innerHTML = document.querySelector("#emailAddress").value;
});
